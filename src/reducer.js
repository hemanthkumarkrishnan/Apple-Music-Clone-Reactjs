export const initialState={
    user:null,
    token:null,
    searchItems:'',
    authorize:false,
    favorite:[],
    songs:[],
    isPlaying:false,
    currentSong:{},
    playbody:false,

 
}
export const reducer = (state,action) =>{

switch(action.type){

    case 'SET_USER':
        return{
            ...state,
            user:action.user,
        }
    case 'SET_TOKEN':
        return{
            ...state,
            token:action.token,
        }
    case 'SET_SEARCH':
        return{
            ...state,
            searchItems:action.search,
        }
    case 'SET_AUTHORIZE':
        return{
            ...state,
            authorize:action.authorize,
        }
    case 'SET_FAVORITE':
        return{
            ...state,
             favorite:action.favorite,
        }
    case 'SET_SONGS':
        return{
            ...state,
             songs:action.songs,
        }
    case 'SET_ISPLAYING':
        return{
            ...state,
             isPlaying:action.isPlaying,
        }
    case 'SET_ CURRENTSONG':
        return{
            ...state,
             currentSong:action.currentSong,
        }
    case 'SET_PLAYBODY':
        return{
            ...state,
             playbody:action.playbody,
        }

  
 
     
   
        default:return state;
}
};