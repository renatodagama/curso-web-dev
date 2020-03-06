
if(window.SimpleSlide) {   // faz a verificação e só funciona se o SimpleSlide existir na pagina
	new SimpleSlide({
		slide: "quote", // nome do atributo data-slide="principal"
		time: 5000 // tempo de transicao dos slides
	});


	new SimpleSlide({
		slide: "portfolio",  
		time: 5000,
		nav: true
	});

}

if(window.SimpleAnime) {
 new SimpleAnime();
}

if(window.SimpleForm) {
	new SimpleForm({
		form: ".formphp", //seletor de formulario
		button: "#enviar", // seletor de botao
		erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para email contato@bikraft.com.</p></div>", // menssagem de erro
		sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve entraremos em contato com você.</p></div>" //menssagem de sucesso
	});
}