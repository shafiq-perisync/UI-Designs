import {StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';


// const theme = useSelector(state => state.themeReducer);
// const theme = useSelector((state) => state.themeReducer);
export const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    // backgroundColor: theme == 'light' ? 'white' : 'black'
  },

  menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  close: {
    backgroundColor: '#fff',
    shadowColor: '#989898',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
    padding: 10,
    color: 'black',
    borderRadius: 50,
    fontSize: 20,
  },

  menuTitle: {
    paddingLeft: 10,
  },

  menuTitleText: {
    fontWeight: 600,
    fontSize: 18,
    color: 'black',
  },

  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },

  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50
  },

  userDetailsTextContainer: {
    marginLeft: 10,
  },

  username: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  usernameText: {
    fontWeight: 500,
    fontSize: 16,
    // color: theme == 'dark' ? 'white': 'black'
  },

  tick: {
    marginLeft: 6,
    width: 15,
    height: 15,
  },

  userId: {
    fontSize: 12,
    color: '#6666',
    paddingTop: 5,
  },
  balanceContainer: {
    width: '100%',
    height: 78,
    marginTop: 30,
    borderRadius: 35,
    backgroundColor: '#7918F2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  logoAndDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    borderWidth: 0.5,
    borderColor: '#bb8aff',
    width: 54,
    height: 54,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  plus: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
  },
  walletContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftWallet: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletIcon: {
    backgroundColor: '#fff',
    shadowColor: '#121212',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    borderRadius: 50,
    padding: 5,
    marginRight: 10,
  },
  WalletText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightIcon: {
    fontSize: 18,
  },
  settingsView: {
    marginTop: 25,
  },
  settingsText: {
    color: 'gray',
  },
  themeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  leftTheme: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moonIcon: {
    backgroundColor: '#fff',
    shadowColor: '#121212',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    borderRadius: 50,
    padding: 5,
    marginRight: 10,
  },
  themeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  disconnectBtn: {
    width: '100%',
    position: 'absolute',
    bottom: 30,
    padding: 18,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#bb8aff',
    borderRadius: 50,
    // justifyContent: 'center' 
    alignItems: 'center'
  },
  disconnectText:{
    color: '#bb8aff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
