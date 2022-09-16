
const footerActionTypes = {
	showContact: "SHOW_CONTACT",
	showAbout: "SHOW_ABOUT",
	showAddress: "SHOW_ADDRESS",
};


export const initialFooterState = {
	showContact: false,
	showAbout:false,
	showAddress: false
};

export const makeOneTrue = (state,key)=>{
	return Object.fromEntries(Object.entries(state).map(([k,_])=>{
		const vMod = k === key;
		return [k,vMod];
	}));
};

export const footerReducer = (state = initialFooterState, action)=>{
	switch(action.type){
		case footerActionTypes.showContact:
			return makeOneTrue(state,"showContact");
		case footerActionTypes.showAbout:
			return makeOneTrue(state,"showAbout");
		case footerActionTypes.showAddress:
			return makeOneTrue(state,"showAddress");
	}
};

export const __showContact = ()=>{
	return {
		type: footerActionTypes.showContact,
	}
};
export const __showAddress = ()=>{
	return {
		type: footerActionTypes.showAddress,
	}
};
export const __showAbout = ()=>{
	return {
		type: footerActionTypes.showAbout,
	}
};