const fetchOffer = () => {
    return async function (dispatch){
        const res = await fetch('http://localhost:8080/promotion');
        const offer = await res.json();
        console.log(offer);
        dispatch(setOffer(offer));
    };
};

const setOffer = (offer = null) =>{
    if(offer){
        return {
            type: 'setOffer',
            payload: offer,
        };
    }
}

export default fetchOffer;