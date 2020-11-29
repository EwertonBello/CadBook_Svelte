var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/CadBook_Svelte',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/EwertonBello/CadBook_Svelte.git',
        user: {
            name: 'EwertonBello',
            email: 'ewerton.bello1212@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)