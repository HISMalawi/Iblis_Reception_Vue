import { ref } from "vue";
import Result from "@/types/result";

const getResults = (tracking: string) => {
    
    const results = ref<Result[]>([]);
    const errorMsg = ref<string>('');

    const load = async () => {

        try {

            let data = await fetch('http://localhost:3000/results/'+ tracking);

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