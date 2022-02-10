<template>
        <div class="report-container container mt-6" id="report">
        <div class="report-header is-primary">
            <h3 class="has-text-weight-semibold">Patient Report</h3>
        </div>
        <div class="facility-info is-flex is-flex-desktop-only">
            <div>
                <img class="gov-logo" src="../assets/gov.gif" alt="GOV logo">
            </div>
            <div>
                <img class="barcode" src="../assets/barcode.png" alt="" srcset="Facility Barcode">
            </div>
            <div class="address has-text-weight-semibold">
                <p>KAMUZU CENTRAL HOSPITAL</p>
                <p>P.O BOX 11,</p>
                <p>LILONGWE</p>
                <p>PHONE: +2651943873</p>
            </div>
        </div>
        <div class="report-info ml-3 mb-3">
            <p class="has-text-weight-semibold">
                <span class="date-accessed">Patient Report - {{today}}</span>
                <span class="times-printed ml-6">No. Printed: 0</span>
                <span class="date-sample-collected ml-6">Date Sample Collected: 07-02-2022</span>
            </p>
        </div>
        <div class="patient-info box">
            <table  class="table is-bordered">
                <tbody>
                  <tr>
                    <th>Patient Name</th>
                    <td>{{ patientName }}</td>
                    <th>Sex</th>
                    <td>{{gender}}</td>
                    <th>Age</th>
                    <td>{{ patientAge }} years</td>
                  </tr>
                  <tr>
                    <th>Patient ID</th>
                    <td>{{patientID}}</td>
                    <th colspan="2">Physical Address</th>
                    <td colspan="2">{{ physicalAddress }}</td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div class="order-info box">
            <div class="order-header mb-3">
                <p class="has-text-weight-semibold">
                    <span class="acc-no">Accession No.: {{accessionNumber}}</span> 
                    <span class="request-by is-pulled-right mr-3"> Requested By : {{requestingPhysician}}({{location}})</span>
                </p>
            </div>
            <div class="order-details">
                <table  class="table is-bordered">
                    <tbody>
                      <tr>
                        <th>Specimen Type</th>
                        <td>{{specimenType}}</td>
                        <th>Date Registered</th>
                        <td>2022-02-01 14:38:13</td>
                      </tr>
                      <tr>
                        <th>Test Type(s)</th>
                        <td><span v-for="(test,i) in tests" :key="test.id">{{test.test_name}} <span v-if="i != tests.length-1">, </span> </span></td>
                        <th>Lab Section</th>
                        <td>Haematology</td>
                      </tr>
                      <tr>
                        <th>Specimen Status</th>
                        <td>Accepted</td>
                        <th>Received By</th>
                        <td>Kosazi mbale</td>
                      </tr>
                    </tbody>
                </table>
            </div>

            <div class="order-results mt-3">
                <table  class="table is-bordered">
                    <tbody>
                      <tr>
                        <th colspan="4"><span class="result">Results</span> <span class="authoratized" v-if="testsAuthorized.length > 0">Test Authoratized({{testsAuthorized.length}})</span>
                            <span class="authoratized" v-if="testsPendindAuthorization.length > 0">Test Pendind Authoratization({{testsPendindAuthorization.length}})</span>
                        </th>
                      </tr>
                      <tr>
                        <th>Test Type</th>
                        <th>Results</th>
                        <th>Remarks</th>
                        <th></th>
                      </tr>
                      <tr v-for="orderResult in orderResults" :key="orderResult.id">
                        <td>{{ orderResult.test_name }}</td>
                        <td>
                            <table class="table is-bordered">
                                <tbody>
                                    <tr>
                                    <th>Measure</th>
                                    <th>Result</th>
                                    </tr>
                                    <tr v-for="result in orderResult.result" :key="result.id">
                                        <td>{{result.measure}}</td>
                                        <td v-if="result.result!=0">{{result.result}}</td>
                                        <td v-else>Not done</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>N/A</td>
                        <td>
                            <div class="test-status is-pulled-left">
                                <h3 class="has-text-weight-semibold">Test Status</h3>
                                <div v-if="orderResult.TestStatusInfo.authorized">
                                    <p>Authorized</p>
                                    <p>By: {{orderResult.TestStatusInfo.authorized_by}}</p>
                                    <p>On: {{orderResult.TestStatusInfo.authorized_on}}</p>
                                </div>
                                <div v-else>
                                    <p>Authorization Pending</p>
                                </div>
                                <h3 class="has-text-weight-semibold mt-3">Performed By</h3>
                                <p>{{orderResult.TestStatusInfo.performed_by}}</p>
                                <p>On {{orderResult.TestStatusInfo.performed_on}}</p>
                                <p v-if="orderResult.machine_used" class="has-text-weight-semibold mt-3">Using: {{orderResult.machine_used}}</p>
                            </div>
                        </td>
                      </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "PatientResultReport",
  props: ['orders', 'results', 'statuses','users'],
  setup(props, context){
        let orders = props.orders;
        let results = props.results;
        let statuses = props.statuses;
        let users = props.users;

        //   Patient details
        let patientName = orders.patient[0].name;
        let patientAge = calcAge(orders.patient[0].dob);
        let gender = (orders.patient[0].gender == 1) ? "Female" : "Male";
        let patientID = orders.patient[0].external_patient_number;
        let physicalAddress = orders.patient[0].address;

        // Report access details
        let today = new Date().toLocaleString('en-GB').slice(0,10).replaceAll('/','-');

        // Order details
        let accessionNumber = orders.tracking_number;
        let requestingPhysician = orders.requesting_physician
        let location = orders.location;
        let specimenType = orders.specimen_type;
        let tests = orders.tests;

        // Results details
        let testsAuthorized:string[] = [];
        let testsPendindAuthorization:string[] = [];
        let orderResults:string[] = [];
        if (results.length > 0) {
            tests.forEach((test:any, index:any) => {
                let resultObj = {} as any;
                let resultTempObj = {} as any;
                let statusInfoTempObj = {} as any;
                let resultArray:string[] = [];
                let verified_by = '';
                let tested_by = '';
                let machine_used = '';
                results.forEach((result:any, i:any) => {
                    if (test.id == result.test_id){
                        resultTempObj = {
                            id: result.id,
                            measure:result.measure_name,
                            result:result.result,
                        }
                        machine_used = result.device_name;
                        resultArray.push(resultTempObj)
                    }
                })
                users.forEach((user:any, i:any) => {
                    if(test.id == statuses[index].id && statuses[index].status == 'verified') {
                        if (test.verified_by == user.id){
                            verified_by = user.lab_technician;
                        }
                        if (test.tested_by == user.id){
                            tested_by = user.lab_technician;
                        }
                        statusInfoTempObj = {
                            authorized: true,
                            authorized_by: verified_by,
                            authorized_on: test.time_verified,
                            performed_by: tested_by,
                            performed_on: test.time_completed
                        }
                    }
                    else{
                        if (test.tested_by == user.id){
                            tested_by = user.lab_technician;
                        }
                        statusInfoTempObj = {
                            authorized: false,
                            authorized_by: verified_by,
                            authorized_on: '',
                            performed_by: tested_by,
                            performed_on: test.time_completed
                        } 
                    }
                }); 
                if(test.id == statuses[index].id && statuses[index].status == 'verified') {
                    testsAuthorized.push(test);
                } else{
                    testsPendindAuthorization.push(test);
                }
                resultObj['test_name'] = test.test_name;
                resultObj['id'] = test.id;
                resultObj['result'] = resultArray;
                resultObj['machine_used'] = machine_used;
                resultObj['TestStatusInfo'] = statusInfoTempObj;
                orderResults.push(resultObj);
                
            })
        }
        return { patientName, patientAge, gender,patientID,physicalAddress, today,accessionNumber,requestingPhysician, 
        location, specimenType, tests,testsAuthorized,testsPendindAuthorization, orderResults}
    }
});

function calcAge(dateString:any) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}
</script>


<style scoped>
    .report-container{
        font-size: 10px;
    }
    table {
            width: 100%;
    }
    .order-header{
        background-color: aquamarine;
        padding:5px;
    }
    .barcode{
        height: 50px;
        width: 250px;
        margin-top: 20px;
        margin-left: 200px;
    }
    .gov-logo{
        margin-top: 20px;
        height: 80px;
        margin-left: 20px;
    }
    .report-header{
        background-color: skyblue;
        padding: 5px;
    }
    .address{
        margin-left: 300px;
    }
    .authoratized{
        margin-left: 250px;
    }
</style>
