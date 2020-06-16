<template>

    <div>
        
        <comic-vault></comic-vault>

        <other-projects></other-projects>

    </div>

</template>

<script>
import ComicVault from './ComicVault.vue'
import OtherProjects from './OtherProjects.vue'

export default {
    name: 'Projects',

    components: {
        'comic-vault': ComicVault,
        'other-projects': OtherProjects
    }

}

</script>

<style scoped>


</style>
