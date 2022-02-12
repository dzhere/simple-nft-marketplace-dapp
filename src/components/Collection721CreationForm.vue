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
export default {
    name: 'Collection721CreationForm'
}
</script>