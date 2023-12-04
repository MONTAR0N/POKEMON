case "ORDER_DRIVERS":
            let copyAllDrivers= [...state.filtered]
            if (action.payload==="NA"){
                copyAllDrivers.sort((a,b) => {
                    if(a.name>b.name) return 1;
                    else return -1;
                })
            }
        else if (action.payload==="ND"){
            copyAllDrivers.sort((a,b) => {
                if(a.name < b.name) return 1;
                else return -1;
            })
        }
        else if (action.payload==="FNA"){
            copyAllDrivers.sort((a,b) => {
                const dateA = new Date(a.birthdate);
                const dateB = new Date(b.birthdate);
                return dateA - dateB;
            })
        }
        else if (action.payload==="FND"){
            copyAllDrivers.sort((a,b) => {
                const dateA = new Date(a.birthdate);
                const dateB = new Date(b.birthdate);
                return dateB - dateA;
            })
        }
            return{
                ...state,
                filtered: copyAllDrivers
            }