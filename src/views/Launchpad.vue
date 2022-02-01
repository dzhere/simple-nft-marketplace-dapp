<template>
    <div>
        <b-form-select v-model="collectionType" :options="collectionTypesOptions"></b-form-select>
        <collection-721-creation-form v-if="collectionType === 721" />
    </div>
</template>

<script>
import { BFormSelect } from 'bootstrap-vue'
import Collection721CreationForm from '@/components/Collection721CreationForm.vue'

export default {
    name: 'Launchpad',
    components: { BFormSelect, Collection721CreationForm, Collection721CreationForm },
    data() {
        return {
            collectionType: null,
            collectionTypesOptions: [
                { value: null, text: 'Please, select collection type' },
                { value: 721, text: 'ERC-721' },
                { value: 1155, text: 'ERC-1155' }
            ]
        }
    }
}
</script>