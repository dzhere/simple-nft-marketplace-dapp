<template>
    <div>
        <b-form>
            <b-form-group label="Collection name">
                <b-form-input placeholder="Enter collection name" required></b-form-input>
            </b-form-group>
            <b-form-group label="Collection symbol">
                <b-form-input placeholder="Enter collection symbol" required></b-form-input>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
import { BForm, BFormGroup, BFormInput } from 'bootstrap-vue'

export default {
    name: 'Collection721CreationForm',
    components: { BForm, BFormGroup, BFormInput },
    data() {
        return {

        }
    }
}
</script>