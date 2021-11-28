export default function pathCheck(location, slug) {
    const locationArr = location.pathname.split('/');
    if (!slug && locationArr.length <= 2) {
        return true;
    }
    if (locationArr.includes(slug)) {
        return true;
    }
}
