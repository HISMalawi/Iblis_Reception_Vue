<template>
        <div class="report-container container mt-6">
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
                <span class="date-accessed">Patient Report - 09-02-2022</span>
                <span class="times-printed ml-6">No. Printed: 0</span>
                <span class="date-sample-collected ml-6">Date Sample Collected: 07-02-2022</span>
            </p>
        </div>
        <div class="patient-info box">
            <table  class="table is-bordered">
                <tbody>
                  <tr>
                    <th>Patient Name</th>
                    <td>John Doe</td>
                    <th>Sex</th>
                    <td>Female</td>
                    <th>Age</th>
                    <td>2 years</td>
                  </tr>
                  <tr>
                    <th>Patient ID</th>
                    <td>12345</td>
                    <th colspan="2">Physical Address</th>
                    <td colspan="2">Female</td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div class="order-info box">
            <div class="order-header mb-3">
                <p class="has-text-weight-semibold">
                    <span class="acc-no">Accession No.: KCH2200432323</span> 
                    <span class="request-by is-pulled-right mr-3"> Requested By : Jack SmallBall</span>
                </p>
            </div>
            <div class="order-details">
                <table  class="table is-bordered">
                    <tbody>
                      <tr>
                        <th>Specimen Type</th>
                        <td>Blood</td>
                        <th>Date Registered</th>
                        <td>2022-02-01 14:38:13</td>
                      </tr>
                      <tr>
                        <th>Test Type(s)</th>
                        <td>ABO Blood Grouping, Cross-match</td>
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
                        <th colspan="4"><span class="result">Results</span> <span class="authoratized">Test Authoratized(2)</span> </th>
                      </tr>
                      <tr>
                        <th>Test Type</th>
                        <th>Results</th>
                        <th>Remarks</th>
                        <th></th>
                      </tr>
                      <tr>
                        <td>ABO Blood Grouping</td>
                        <td>BRhD Positive</td>
                        <td>N/A</td>
                        <td>
                            <div class="test-status is-pulled-left">
                                <h3 class="has-text-weight-semibold">Test Status</h3>
                                <p>Authoratized</p>
                                <p>By: Chadreck Hare</p>
                                <p>On: 2022-02-04 14:27:34</p>
                            
                                <h3 class="has-text-weight-semibold mt-3">Performed By</h3>
                                <p>Emmaz kahalawa</p>
                                <p>On 2022-02-04 13:18:04</p>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Cross-match</td>
                        <td>
                            <table class="table is-bordered">
                                <tbody>
                                    <tr>
                                    <th>Measure</th>
                                    <th>Result</th>
                                    </tr>
                                    <tr>
                                        <td>Pack No.</td>
                                        <td>8453450</td>
                                    </tr>
                                    <tr>
                                        <td>Pack ABO Group</td>
                                        <td>B RhD Positive</td>
                                    </tr>
                                    <tr>
                                        <td>Product Type</td>
                                        <td>Whole Blood</td>
                                    </tr>
                                    <tr>
                                        <td>Expiry Date</td>
                                        <td>2022-03-03</td>
                                    </tr>
                                    <tr>
                                        <td>Volume</td>
                                        <td>450mL</td>
                                    </tr>
                                    <tr>
                                        <td>Cross-match Method</td>
                                        <td>Saline</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>N/A</td>
                        <td>
                            <div class="test-status is-pulled-left">
                                <h3 class="has-text-weight-semibold">Test Status</h3>
                                <p>Authoratized</p>
                                <p>By: Gwada malulo</p>
                                <p>On: 2022-02-04 14:27:34</p>
                                <h3 class="has-text-weight-semibold mt-3">Performed By</h3>
                                <p>tchaka zulu</p>
                                <p>On 2022-02-04 13:18:04</p>
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
import { ActionTypes, useStore } from "@/store";

export default defineComponent({
    name: 'PatientResultReport',
    setup() {
        const store = useStore();
        // console.log(store)
    },
})
</script>

<style scoped>
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
        margin-left: 400px;
    }
    .gov-logo{
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
</style>
