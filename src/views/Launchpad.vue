<template>
    <div>
        <b-form-select v-model="collectionType" :options="collectionTypesOptions"></b-form-select>
        <collection-721-creation-form v-if="isERC721CollectionTypeSelected" />
        <collection-1155-creation-form v-if="isERC1155CollectionTypeSelected" />
    </div>
</template>

<script>
import { BFormSelect } from 'bootstrap-vue'
import Collection721CreationForm from '@/components/Collection721CreationForm.vue'
import Collection1155CreationForm from '@/components/Collection1155CreationForm.vue'

export default {
    name: 'Launchpad',
    components: {
        BFormSelect,
        Collection721CreationForm,
        Collection1155CreationForm
    },
    data() {
        return {
            collectionType: null,
            collectionTypesOptions: [
                { value: null, text: 'Please, select collection type' },
                { value: 721, text: 'ERC-721' },
                { value: 1155, text: 'ERC-1155' }
            ]
        }
    },
    computed: {
        isERC721CollectionTypeSelected () {
            return this.collectionType === 721
        },
        isERC1155CollectionTypeSelected () {
            return this.collectionType === 1155
        }
    }
}
</script>
