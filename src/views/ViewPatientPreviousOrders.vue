<template>
  <div class="content has-text-left">
    <table class="table custom-bg">
      <thead>
        <tr>
          <th>Accession Number</th>
          <th>Results</th>
        </tr>
      </thead>


      <tbody>
        <tr
          class="is-clickable"
          v-for="Specimen in paginatedSpecimes"
          :key="Specimen.id"
          @click="showDetails(Specimen)"
        >
          <td>
            <label class="is-clickable">{{ Specimen.accession_number }}</label>
          </td>

          <td>
            <button
              v-if="Specimen.class == 'results-ready'"
              :class="Specimen.class"
              class="button is-small custom-btn"
            >
              Available
            </button>
            <button
              v-if="Specimen.class == 'from-db'"
              :class="Specimen.class"
              class="button is-small custom-btn"
            >
              Not Available
            </button>
          </td>
        </tr>
      </tbody>

      <tfoot>
            <nav
              class="pagination mb-4"
              role="navigation"
              aria-label="pagination"
            >
              <a
                v-if="page != 1"
                @click="page--"
                class="pagination-previous is-disabled"
                title="This is the first page"
                >Previous</a
              >
              <a
                v-if="
                  page < pages.length &&
                  numberOfPages > 1 &&
                  numberOfPages !== page
                "
                class="pagination-next"
                @click="page++"
                >Next page</a
              >
              <ul class="pagination-list">
                <li
                  v-for="pagex in numberOfPages"
                  :key="pagex"
                  @click="page = pagex"
                >
                  <a
                    :class="page == pagex ? 'is-current' : ''"
                    class="pagination-link"
                    aria-label="Page 1"
                    aria-current="page"
                    >{{ pagex }}</a
                  >
                </li>
              </ul>
            </nav>
          </tfoot>
    </table>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onUnmounted, ref, watch} from "vue";
import { useStore } from "@/store";
import GetPatientOrders from "@/composables/getPatientOrders";
import { Specimen } from "@/interfaces/Specimen";

export default defineComponent({
  name: "ViewPatientPreviousOrders",
  emits: ['OpenResultsPanel'],
  setup(props, context) {

    const store = useStore();

    const { fetchOrders, Specimens } = GetPatientOrders();

    let page = ref<number>(1);
    let perPage = ref<number>(20);
    let pages = ref<number[]>([]);
    let numberOfPages = ref<number>(0);

    let patient = store.getters.selectedPatient;

    fetchOrders(patient.id);


    const setPages = () => {
      numberOfPages.value = Math.ceil(Specimens.value.length / perPage.value);
      for (let index = 1; index <= numberOfPages.value; index++) {
        pages.value.push(index);
      }
    };

    const paginatedSpecimes = computed(() => {
      let xpage: number = page.value;
      let xperPage = perPage.value;
      let from = xpage * xperPage - xperPage;
      let to = xpage * xperPage;
      return filterSpecimens.value.slice(from, to);
    });

    const filterSpecimens = computed(() => {

      page.value = 1
      return Specimens.value
    })

    setPages();

    watch(
      () => [Specimens.value],
      () => {
        setPages();
      }
    );

    onUnmounted(() => {

      Specimens.value.length = 0
      paginatedSpecimes.value.length = 0
      page.value = 1

    })

    const showDetails = (Specimen: Specimen) => {

      context.emit('OpenResultsPanel', Specimen)

    }

    return { patient, Specimens, paginatedSpecimes, pages, numberOfPages, perPage, page, showDetails };
  },
});
</script>
<style>
.custom-btn {
  width: 100px !important;
  color: white !important;
}
</style>
