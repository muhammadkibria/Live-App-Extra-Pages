export const styles =({
    MainBox:{
        height:'100%',
    },
    Container:{
        padding:20,
    },
})

export const contactStyles = ({
    
    HeaderTitle:{
        textAlign:'center',
        fontSize:32,
        fontWeight:700,
    },
    ContactItem:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        borderBottomColor:'#cccccc',
        borderBottomWidth:1,
        paddingVertical:10
    },
    ProfileImageWrapper:{
        width:'25%'
    },
    ProfileImage:{
        backgroundColor:'green',
        width:55,
        height:55,
        borderRadius:100
    },
    ProfileTitle:{
        width:'50%',
        height:20,
    },
    LastTextTime:{
        width:'25%',
        height:20,
    },
    Title:{
        fontWeight:700,
        color:'black',
        fontSize:16,
    },
    SubTitle:{
        color:'#2e2e2e'
    }
});

export const chatStyles = ({
    Header:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        paddingVertical:10,
        borderBottomColor:'#cccccc',
        borderBottomWidth:2
    },
    PersonTitle:{
        fontSize:22,
        fontWeight:700,
        textAlign:'center',
        marginHorizontal:30,
    },
    HeaderLeft:{
        width:'25%',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    HeaderCenter:{
        width:'50%',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
    },
    HeaderRightt:{
        width:'25%'
    },
    BackBtn:{
        height:20,
        width:20
    },
    MainBox:{
        height:'100%',

    },
    Body:{
        height:'80%',
    },
    Frnd:{
        backgroundColor:'orange',
        width:'80%',
        padding:10,
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
        marginBottom:10,
    },
    Me:{
        width:"80%",
        padding:10,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        marginBottom:10,
        backgroundColor: 'skyblue',
    },
    MeWrapper:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    Footer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:'20%',
        // marginVertical:10
        // backgroundColor: 'green',
        
        
    },
    Camera:{
        height:25,
        width:25,
        marginRight:10,
    },
    TextInput:{
        width:'70%',
        borderColor:'#CCCCCC',
        borderWidth:1,
        borderRadius:50,
        paddingLeft:20,
    },
    CameraImageWrapper:{
        width:'30%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        // marginBottom:20
    },
    Container:{
        paddingVertical:50,
        paddingHorizontal:20,
    }
    
});
export const searchPage =({
    MainBox:{

    },
    SearchWrapper:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    Search:{
        width:'80%',
        marginRight:5,
        borderRadius:100,
        paddingLeft:10,
        backgroundColor: "#dddddd",
    },
    Cancel:{
        width:'20%',
        marginLeft:5,
    },
    CancelText:{
        fontSize:16,
    },
    SearchItem:{
        display:'flex',
        flexDirection:'row',
        paddingVertical:15,
        borderBottomColor:'#f1f1f1',
        borderBottomWidth:1,
    },
    Icon:{
        height:20,
        width:20,
        marginRight:18
    }
});

export const SearchResultStyles = ({
    HostTextWrapper:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:14
    },
    UserImage:{
        height:55,
        width:55,
        borderRadius:100
    },
    HostWrapper:{
        display:'flex',
        flexDirection:'row',

    },
    HostItem:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width:130,
        borderColor:'#cccccc',
        borderWidth:1,
        height:160,
        justifyContent:'center',
        borderRadius:8,
        marginRight:10
    },
    UserName:{
        color:'black',
        fontWeight:700,
    },
    FollowBtn:{
        borderRadius:100,
        backgroundColor:'blue',
        width:70,
        height:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:5
    },
    FollowBtnTxt:{
        color:'white',
    },
    CommunityWrapper:{
        marginBottom:10,
    },
    CommunityItem:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    CommunityUserImage:{
        height:55,
        width:55,
        borderRadius:8,
    },
    TitleSubTilteWrapper:{
        marginHorizontal:10
    },
    RelevantLeft:{
        display:'flex',
        flexDirection:'row'
    },
    SectionLeftTitle:{
        fontWeight:700,
        fontSize:16,
        color:'black'
    }
})