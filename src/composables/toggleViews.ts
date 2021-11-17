import { useStore } from "vuex"

const toggleViews = () => {

    const store = useStore()

    const OpenPatientDetails = (value : boolean) => {

        store.commit("OPEN_PATIENT_VIEW_ORDERS", !value)
        store.commit("OPEN_PATIENT_PLACE_ORDER", !value)

        store.commit("OPEN_PATIENT_DETAILS", value)
    }

    const OpenCreatePatientOrder = (value : boolean) => {

        store.commit("OPEN_PATIENT_DETAILS", !value)
        store.commit("OPEN_PATIENT_VIEW_ORDERS", !value)

        store.commit("OPEN_PATIENT_PLACE_ORDER", value)
        
    }

    const OpenViewPatientOrders = (value : boolean) => {

        store.commit("OPEN_PATIENT_DETAILS", !value)
        store.commit("OPEN_PATIENT_PLACE_ORDER", !value)

        store.commit("OPEN_PATIENT_VIEW_ORDERS", value)
        
    }

    const OpenPatientSearchResultsView = () => {
        store.commit("REGISTERING_PATIENT", false);
        store.commit("SEARCHING_PATIENT", true);
      };

    const OpenPatientRegForm = () => {
    store.commit("SEARCHING_PATIENT", false);
    store.commit("VIEWING_PATIENT", false);
    store.commit("REGISTERING_PATIENT", true);
    };

    const ClosePatientRegForm = () => {
    store.commit("REGISTERING_PATIENT", false);
    };

    return { OpenPatientSearchResultsView, OpenPatientDetails, OpenCreatePatientOrder, OpenViewPatientOrders, OpenPatientRegForm, ClosePatientRegForm }
    
    
}


export default toggleViews  