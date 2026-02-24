export const PAGES = {
    HOME: '/',
    EXPLORE: '/explore',
    PROFILE_FAKE: '/profile-fake',
    PROFILE: (username:string) => `/u/${username}`,
    SHOP: '/shop',
    SSG: '/shop/ssg',
    ISR: '/shop/isr'
}