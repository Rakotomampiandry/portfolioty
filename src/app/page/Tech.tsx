import { CadreSkil } from "../component/cadre";

export function Tech() {
    return (
        <div className="pb-[40%] lg:pb-[5%] md:pb-[10%]">
            <div className="place-content-center">
                <p className="text-white font-semibold opacity-20 text-[10px]">Bienvenue sur la page techs</p>
                <p className="font-bold text-violeta text-[30px]">Technologie</p>
                <p className="text-violeta text-[18px] font-bold opacity-90">Langage de programmation</p>
            </div>

            {/* Phone */}
            <div className="grid grid-cols-2 gap-[3%] lg:hidden md:hidden">
                <CadreSkil
                    image="./images/hml.png"
                    alt="logo html"
                    titre="HTML"
                    text="Structure web"
                />

                <CadreSkil
                    image="./images/cs.png"
                    alt="logo css"
                    titre="CSS"
                    text="Style des pages"
                />

                <CadreSkil
                    image="./images/js.png"
                    alt="logo javascript"
                    titre="JavaScript"
                    text="Fonctionnalités"
                />

                <CadreSkil
                    image="./images/nestjs.png"
                    alt="logo nestjs"
                    titre="NestJS"
                    text="Backend structuré"
                />

                <CadreSkil
                    image="./images/react.png"
                    alt="logo react"
                    titre="React"
                    text="Interfaces web"
                />

                <CadreSkil
                    image="./images/nextjs.png"
                    alt="logo nextjs"
                    titre="Next.js"
                    text="Framwork React"
                />

                <CadreSkil
                    image="./images/postgresql.png"
                    alt="logo postgresql"
                    titre="PostgreSQL"
                    text="Base de données"
                />

                <CadreSkil
                    image="./images/mysql.png"
                    alt="logo mysql"
                    titre="MySQL"
                    text="Base de données"
                />

                <CadreSkil
                    image="./images/tailwind.png"
                    alt="logo tailwind"
                    titre="Tailwind CSS"
                    text="Styles rapides"
                />

                <CadreSkil
                    image="./images/figma.png"
                    alt="logo figma"
                    titre="Figma"
                    text="Design d'interfaces"
                />

                <CadreSkil
                    image="./images/typescript.png"
                    alt="logo typescript"
                    titre="TypeScript"
                    text="Typage"
                />

                <CadreSkil
                    image="./images/git.png"
                    alt="logo github"
                    titre="Git & GitHub"
                    text="Collaboration"
                />
            </div>

            {/* Desktop */}
            <div className="hidden lg:flex justify-center px-[10%] mt-[2%] md:flex md:mt-[5%]">
                <div className="grid lg:grid-cols-4 gap-[2%] md:grid-cols-3">
                    <CadreSkil
                        image="./images/hml.png"
                        alt="logo html"
                        titre="HTML"
                        text="Structure web"
                    />

                    <CadreSkil
                        image="./images/cs.png"
                        alt="logo css"
                        titre="CSS"
                        text="Style des pages"
                    />

                    <CadreSkil
                        image="./images/js.png"
                        alt="logo javascript"
                        titre="JavaScript"
                        text="Fonctionnalités"
                    />

                    <CadreSkil
                        image="./images/nestjs.png"
                        alt="logo nestjs"
                        titre="NestJS"
                        text="Backend structuré"
                    />

                    <CadreSkil
                        image="./images/react.png"
                        alt="logo react"
                        titre="React"
                        text="Interfaces web"
                    />

                    <CadreSkil
                        image="./images/nextjs.png"
                        alt="logo nextjs"
                        titre="Next.js"
                        text="Framwork React"
                    />

                    <CadreSkil
                        image="./images/postgresql.png"
                        alt="logo postgresql"
                        titre="PostgreSQL"
                        text="Base de données"
                    />

                    <CadreSkil
                        image="./images/mysql.png"
                        alt="logo mysql"
                        titre="MySQL"
                        text="Base de données"
                    />

                    <CadreSkil
                        image="./images/tailwind.png"
                        alt="logo tailwind"
                        titre="Tailwind CSS"
                        text="Styles rapides"
                    />

                    <CadreSkil
                        image="./images/figma.png"
                        alt="logo figma"
                        titre="Figma"
                        text="Design d'interfaces"
                    />

                    <CadreSkil
                        image="./images/typescript.png"
                        alt="logo typescript"
                        titre="TypeScript"
                        text="Typage"
                    />

                    <CadreSkil
                        image="./images/git.png"
                        alt="logo github"
                        titre="Git & GitHub"
                        text="Collaboration"
                    />
                </div>
            </div>

        </div>
    )
}