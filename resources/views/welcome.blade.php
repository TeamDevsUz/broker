<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        
        
        <!-- Bootstrap styles -->
        <link rel="stylesheet" href="{{asset('app-assets/css/bootstrap.css')}}">
        <link rel="stylesheet" href="{{asset('css/bootstrap.min.css.map')}}">
        <link rel="stylesheet" href="{{asset('app-assets/css/bootstrap.css')}}">
        <link rel="stylesheet" href="{{asset('app-assets/css/bootstrap-extended.css')}}">
        <link rel="stylesheet" href="{{asset('app-assets/css/components.css')}}">
        <link rel="stylesheet" href="{{asset('app-assets/css/colors.css')}}">
        <!-- Icons -->
        <link rel="stylesheet" href="{{asset('app-assets/fonts/feather/iconfont.css')}}">
        <!-- Bootstrap styles -->
        
        <link rel="stylesheet" href="{{asset('css/custom.css')}}">
    </head>
    <body>
        <div class="mainBody">
            <div id="app" style="height: 100%">
            </div>
        </div>
        
        <!-- Bootstrap scripts -->
        <script src="{{asset('plugins/jquery/jquery.min.js')}}"></script>
        <script src="{{asset('plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
        <script src="{{asset('plugins/bootstrap_my/myScripts.js')}}" type="text/javascript"></script>
        <!-- Bootstrap scripts -->
        
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
