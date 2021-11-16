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

    return { OpenPatientDetails, OpenCreatePatientOrder, OpenViewPatientOrders }
    
    
}


export default toggleViews  