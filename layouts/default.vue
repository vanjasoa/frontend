<template>
    <div>
        <TopNavigationBar>
            <template #logo >
                <img src="~/assets/logo.svg" />
            </template>
        </TopNavigationBar>
        <slot />
        <Footer />
    </div>
</template>