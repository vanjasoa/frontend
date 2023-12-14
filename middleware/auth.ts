export default defineNuxtRouteMiddleware(async (to, _from) => {
  const { fetchUser, setUser } = useDirectusAuth();
  const { token } = useDirectusToken();
  //const user = useDirectusUser();
  const user = await fetchUser();
  console.log(user.value)
  //console.log('Cookies:', document.cookie);
  // if (!user.value) {
  //   const user = await fetchUser();
  //   setUser(user.value);
  // }
  if (!token.value) {
    return navigateTo("/");
  }
 
});