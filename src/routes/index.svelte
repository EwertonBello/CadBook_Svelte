<script>
	import { Container, Button, Icon, Row, Col } from "svelte-materialify";
	import Footer from "../components/footer/Footer.svelte";
	import Toolbar from "../components/toolbar/Toolbar.svelte";

	import { isLoading } from "../components/toolbar/LoadingStore";

	function setLoading(value = true) {
		isLoading.update((isLoading) => (isLoading = value));
	}
</script>

<style lang="scss">
	.title {
		font-size: 1.25rem;
		font-weight: 300;
	}
	#home {
		background-image: linear-gradient(135deg, #6e45e2 0%, #88d3ce 100%);
		img {
			width: 300px;
		}
	}
</style>

<svelte:head>
	<title>CadBook - Svelte</title>
</svelte:head>
<Toolbar title="Home" />

<div class="container pb-2">
	<div class="theme--dark" id="home">
		<Container class="pt-6 pb-6">
			<Row>
				<Col class="d-flex justify-center flex-column" md="7">
					<h1 class="mb-4 text-h2 text-md-h1">CadBook</h1>
					<h3>Crie títulos imaginários</h3>
					<p class="mb-3 title grey-text text-lighten-4">
						Aqui sua imaginação toma forma, crie títulos de livros,
						diga quantas páginas esse livro terá e por quanto você
						pretende vende-lo. Deixe sua imaginação correr solta!!
					</p>
					<div class="d-flex flex-wrap">
						<a
							rel="prefetch"
							href="/books/"
							class="text-decoration-none text-darken-2">
							<Button
								on:click={()=>setLoading(true)}
								size="large"
								class="primary-color">
								<Icon class="mdi mdi-book pr-3" />
								COMEÇAR
							</Button>
						</a>
					</div>
				</Col>
				<Col
					class="d-flex justify-center align-center flex-column"
					md="5">
					<img src="book_lover.svg" alt="Girl reading" />
				</Col>
			</Row>
		</Container>
	</div>
</div>
<Footer />
