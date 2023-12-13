export default defineNuxtRouteMiddleware(async (to, _from) => {
  const { fetchUser, setUser } = useDirectusAuth();
  //const user = useDirectusUser();
  const user = await fetchUser();
  //console.log('Cookies:', document.cookie);
  // if (!user.value) {
  //   const user = await fetchUser();
  //   setUser(user.value);
  // }
  if (!user.value) {
    return navigateTo("/");
  }
});