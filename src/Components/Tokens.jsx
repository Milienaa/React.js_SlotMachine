import { useSelector } from "react-redux";

export default function Tokens() {
    const tokens = useSelector(state => state.tokens)
    return (
        <div className='slot__tokens'>
            <p className="txt">жетони</p>
            <p className="token">{tokens}</p>
        </div>
    )
}