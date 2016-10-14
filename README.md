# templateBootstrap

## Installation : 
npm install --save-dev

## Lancement : 
gulp
dans la console dans le dossier

## Workflow : 
Modification des styles en scss dans styles.scss (https://www.grafikart.fr/formations/sass-compass/differences-sass-scss)
#### Cloner un nouveau template
git clone https://github.com/Mziserman/templateBootstrap.git

rm -r templateBootstrap/.git (pour utiliser un autre repository)

mv templateBootstrap templates/${clientName}/${pageName} (par exemple)

#### Travailler sur le template 
Création du template dans markup.ftl

Pour compiler, lancer gulp dans la console.
Le resultat est dans un fichier nommé result.ftl.
Copier/coller le resultat dans le control center.
