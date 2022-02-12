<template>
    <div>
        <b-form>
            <b-form-group label="URI">
                <b-form-input placeholder="Enter URI" required></b-form-input>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
import { BForm, BFormGroup, BFormInput } from 'bootstrap-vue'

export default {
    name: 'Collection1155CreationForm',
    components: { BForm, BFormGroup, BFormInput },
    data() {
        return {

        }
    }
}
</script>
