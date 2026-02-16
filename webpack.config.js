import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin"; // Webpack Server use. 

export default {
	mode: "development",      
	entry: "./src/index.js",
	output: {
		filename: "main.js", // Output name.
		path: path.resolve(import.meta.dirname, "dist"), // Path to dist.
		clean: true, // If true, overwrites dist.
	},
	devtool: "eval-source-map", // Webpack Server use.
	devServer: {
		watchFiles: ["./src/template.html"],
	},
	plugins: [
	    new HtmlWebpackPlugin({
		    template: "./src/template.html",
	    }),
	],
	module: {
	    rules: [
			{
				test: /\.css$/i,
			    use: ["style-loader", "css-loader"],
		    },
		    {   // Handle Images HTML
				test: /\.html$/i,
				use: ["html-loader"],
			},			
			{   // Handle images JS
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
	    ],
	},
};