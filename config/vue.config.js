module.exports = {
	proxy:{
		'/api':{
            // target:'https://www.runoob.com/try/ajax/',
            target:'http://10.6.51.133/EIP/gows.php',
			ws:true,
			changeOrigin:true,
			pathRewrite:{
				'^/api': ''
			}
		}
	}

}