import Head from 'next/head'

export const Meta=({ title, keywords, description }) => {
    return (
        <Head>
            <meta
                name='viewport'
                content="width=device-width, initial-scale=1"
            />
            <meta
                name='keywords'
                content={ description }
            />
             <meta
                charset='UTF-8'
            />

            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps={
    title: 'NextJs',
    keyword: 'NextJs crash course',
    description:'Learn Next Js'
}