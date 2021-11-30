import { MutationTypes, useStore } from "@/store";

const toggleViews = () => {
  const store = useStore();

  const OpenPatientDetails = (value: boolean) => {
    store.commit(MutationTypes.OPEN_PATIENT_VIEW_ORDERS, !value);
    store.commit(MutationTypes.OPEN_PATIENT_PLACE_ORDER, !value);
    store.commit(MutationTypes.VIEW_PATIENT, value);
    store.commit(MutationTypes.OPEN_PATIENT_DETAILS, value);
  };

  const OpenCreatePatientOrder = (value: boolean) => {
    store.commit(MutationTypes.OPEN_PATIENT_DETAILS, !value);
    store.commit(MutationTypes.OPEN_PATIENT_VIEW_ORDERS, !value);
    store.commit(MutationTypes.OPEN_PATIENT_PLACE_ORDER, value);
  };

  const OpenViewPatientOrders = (value: boolean) => {
    store.commit(MutationTypes.OPEN_PATIENT_DETAILS, !value);
    store.commit(MutationTypes.OPEN_PATIENT_PLACE_ORDER, !value);

    store.commit(MutationTypes.OPEN_PATIENT_VIEW_ORDERS, value);
  };

  const OpenPatientSearchResultsView = () => {
    store.commit(MutationTypes.REGISTER_PATIENT, false);
    store.commit(MutationTypes.SEARCH_PATIENT, true);
  };

  const ClosePatientSearchResultsView = () => {
    store.commit(MutationTypes.VIEW_PATIENT, false);
    store.commit(MutationTypes.SEARCH_PATIENT, false);
  };

  const OpenPatientRegForm = () => {
    store.commit(MutationTypes.SEARCH_PATIENT, false);
    store.commit(MutationTypes.VIEW_PATIENT, false);
    store.commit(MutationTypes.REGISTER_PATIENT, true);
  };

  const ClosePatientRegForm = () => {
    store.commit(MutationTypes.REGISTER_PATIENT, false);
  };

  return {
    OpenPatientSearchResultsView,
    ClosePatientSearchResultsView,
    OpenPatientDetails,
    OpenCreatePatientOrder,
    OpenViewPatientOrders,
    OpenPatientRegForm,
    ClosePatientRegForm,
  };
};

export default toggleViews;
