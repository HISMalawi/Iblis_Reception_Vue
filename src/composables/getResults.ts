import { ref } from "vue";

const getResults = () => {
    
    const results = ref([]);
    const errorMsg = ref('');

    const load = async () => {

        try {

            let data = await fetch('http://localhost:3000/results');

            if (!data.ok) {
                
                throw Error;
            }

            results.value = await data.json();

        } catch (error) {

            errorMsg.value = 'Data not available!';
        }
    }

    return { results, errorMsg, load }
}


export default getResults  