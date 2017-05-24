export const loadState = (argument)=> {
	var state=localStorage.getItem('shoppingCart');
	if(state) return JSON.parse(state);
	else return {};
};
export const saveState = (state)=>{
	if(state){
		localStorage.setItem('shoppingCart',JSON.stringify(state));
	};
};