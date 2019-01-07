import {
  StyleSheet
} from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  logoWrapper: {
    flex: 1,
    justifyContent: "flex-end"
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  form: {
    flex: 3,
    width: "100%",
    padding: 20
  },
  tipWrapper: {
    marginTop: 8
  },
  tip: {
    color: "#3e3e3e",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right"
  },
  inputWrapper: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#3e3e3e",
    borderRadius: 4,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  names: {
    width: "100%",
    height: 44,
    padding: 0
  },
  password: {
    width: "100%",
    height: 44,
    padding: 0
  },
  buttonWrapper: {
    marginTop: 10,
    borderRadius: 4,
  },
  buttonTop: {
    marginTop: 30
  },
  primary: {
    backgroundColor: "#2d98ff"
  },
  info: {
    backgroundColor: "#fff"
  }
})
