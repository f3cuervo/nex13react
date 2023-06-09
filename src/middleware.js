import { NextResponse } from "next/server";

export function middleware(request){
    const requestHeadersw = new Headers(request.headers);
    requestHeadersw.set('nextjs-con-cuervo','hola-mundo')

    const response = NextResponse.next({
        request:{
            headers:requestHeadersw
        }
    });
    
    // if(request.nextUrl.pathname.endsWith("/information")){
    //     return NextResponse.redirect(
    //         new URL("/information/characters",request.url)
    //     )
    // }
    //guardar ruta a persona logeada
    if(request.nextUrl.pathname.startsWith("/information")){
        const user = {
            name:"Cuervo",
            authorizated: true
        }
        if(!user.authorizated){
            return NextResponse.redirect(
                new URL ("/login", request.url))
        }
    }
    return response 
}

export const config = {
    marcher:[
        "/information/:path*"
    ]
}