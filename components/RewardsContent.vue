<template>
    <div>
        <div class="flex flex-col justify-center items-center">
            <div class="mt-[-50px] flex flex-col items-center">
                <slot name="retour" />
                <h2>
                    Qu’est ce qui est mieux qu'une pizza ?
                    Une pizza gratuite.
                </h2>
                <p>
                    Plus vous collectez des points,
                    plus vos récompenses seront grandes.
                </p>
            </div>
            <div class="m-8">
                <slot name="levels" />
            </div>
        </div>
    </div>
</template>