<script>

export default {
    name: 'slider',
    props: {
        sliderContent: {
        type: Array,
        required: true
        }
    },
    mounted() {
        this.movement()
    },
    methods: {
        movement() {
            var containers = Array.from(document.getElementsByClassName('div-overflow'))

            containers.forEach(container => {
                var dimContainer = container.offsetWidth
                var locationref = (dimContainer/3)*0.88

                // Logo1
                let logo1 = container.getElementsByClassName('logo1')[0]
                let dimLogo1 = logo1.offsetWidth
                let pos1 = 0

                // Logo2
                let logo2 = container.getElementsByClassName('logo2')[0]
                let dimLogo2 = logo2.offsetWidth
                let pos2 = locationref

                // Logo3
                let logo3 = container.getElementsByClassName('logo3')[0]
                let dimLogo3 = logo3.offsetWidth
                let pos3 = locationref*2

                // Logo4
                let logo4 = container.getElementsByClassName('logo4')[0]
                let dimLogo4 = logo4.offsetWidth
                let pos4 = - locationref
                
                function move() {
                // Logo1
                logo1.style.left = `${pos1}px`
                if (pos1 >= dimContainer) {
                    pos1 = -dimLogo1
                } else {
                pos1 = pos1 + 1
                }

                // Logo2
                logo2.style.left = `${pos2}px`
                if (pos2 >= dimContainer) {
                    pos2 = -dimLogo2
                } else {
                    pos2 = pos2 + 1
                }

                // Logo3
                logo3.style.left = `${pos3}px`
                if (pos3 >= dimContainer) {
                    pos3 = -dimLogo3
                } else {
                    pos3 = pos3 + 1
                }

                // Logo4
                logo4.style.left = `${pos4}px`
                if (pos4 >= dimContainer) {
                    pos4 = -dimLogo4
                } else {
                pos4 = pos4 + 1
                }
                setTimeout(move, 25)
                }
                move()
            })
        }
    }
}

</script>

<template>
    <section class="container">
        <div class="div-overflow">
            <div class="content logo1">
            <img :src="sliderContent[0].img" class="logos">
            <h2 class="name">{{ sliderContent[0].name }}</h2>
        </div>
         <div class="content logo2">
            <img :src="sliderContent[1].img" class="logos">
            <h2 class="name">{{ sliderContent[1].name }}</h2>
        </div>
        <div class="content logo3">
            <img :src="sliderContent[2].img" class="logos">
            <h2 class="name">{{ sliderContent[2].name }}</h2>
        </div>
        <div class="content logo4">
            <img :src="sliderContent[3].img" class="logos">
            <h2 class="name">{{ sliderContent[3].name }}</h2>
        </div>
        </div>
        
    </section>
</template>

<style scoped lang="scss">

.container {
    position: relative;
    height: 6rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-left: 5px solid rgba(0, 174, 255, 0.6);
    border-right: 5px solid rgba(0, 174, 255, 0.6);
    border-radius: 0.25rem;

    flex: 0.40;

    width: 40rem;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    margin: 0 1rem;
    max-width: 3rem;
}

.logos {
    width: 3rem;
}

.name {
    margin-top: 0.5rem;
    color: white;
    font-size: medium;
}

.div-overflow {
    position: absolute;
    left: -2rem;
    height: 6rem;
    display: flex;
    align-items: center;
    width: 120%;
}

@media screen and (max-width: 920px) {
    .container {
        width: 20rem;
    }
}

</style>