const options = {
 bottom: '41rem', // default: '32px'
  right: 'unset', // default: '32px'
  left: '90rem', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#808080', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}


const darkmode = new Darkmode(options);
darkmode.showWidget();