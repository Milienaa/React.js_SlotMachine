import { useSelector } from "react-redux"

export default function BtnCount() {

    const tokens = useSelector(state => state.tokens);
    return (
        <button className={`slot__count ${tokens === 0 ? 'slot__count--active' : '' }`}>поповни свій рахунок</button>
    )
}