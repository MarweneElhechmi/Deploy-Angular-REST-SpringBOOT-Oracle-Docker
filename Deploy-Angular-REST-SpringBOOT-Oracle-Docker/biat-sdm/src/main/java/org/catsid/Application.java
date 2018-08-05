package org.catsid;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
public class Application extends SpringBootServletInitializer{

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }

	public static void main(String[] args) {
		 SpringApplication.run(Application.class, args);
		
		 /**	Ouverture du Browser	*/
//		 System.out.println("Application started ... launching browser now");
//		 Browse("http://localhost:4200/blank-page/1");
	} 
//	@RequestMapping(value = "/")
//	public String page() {
//		
//			return "WEB-INF/classes/webapp/index.html";
//	}
	
	
//	public static void Browse(String url) {
//	    if(Desktop.isDesktopSupported()){
//	        Desktop desktop = Desktop.getDesktop(); 
//	        try {
//	            desktop.browse(new URI(url));
//	        } catch (IOException | URISyntaxException e) {
//	            e.printStackTrace(); 
//	        }
//	    }else{
//	        Runtime runtime = Runtime.getRuntime();
//	        try {
//	            runtime.exec("rundll32 url.dll,FileProtocolHandler " + url);
//	        } catch (IOException e) {
//	            e.printStackTrace();
//	        }
//	    }
//	}
}
