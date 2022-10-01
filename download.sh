#!/bin/bash

# Descarga 1 de cada 20 archivos que encuentre
salto=20
url="https://cdaweb.gsfc.nasa.gov/pub/data/dscovr/h0/mag/"
match="dscovr_h0"
salida=dataset$1

if [ $# != 1 ]
then
    echo Error de numero de parametros
    exit 1
fi

# Nota pa despues, se puede optimizar como un array o en otro archivo o algo asi
if [[ $(command -v hxselect) == "" ]]
then
    echo Necesitas instalar html-xml-utils
    exit 1
fi

if [[ $(command -v wc) == "" ]]
then
    echo Necesitas instalar wc
    exit 1
fi

if [[ $(command -v curl) == "" ]]
then
    echo Necesitas instalar curl
    exit 1
fi

if [[ $(command -v wget) == "" ]]
then
    echo Necesitas instalar wget
    exit 1
fi

url+=$1/
curl $url --output query.html

if [[ $(grep "404" query.html) == "<title>404 Not Found</title>" ]]
then
    echo Año no valido
    exit 1
fi

[ -d $salida ] && echo Ya existe el direcotrio $salida, borralo antes de continuar && exit 1

grep $match query.html > results.html

hxselect -c a -s "\n" < results.html > dos.html

lineas=$(wc -l < dos.html)
# Se le resta el modulo para evitar cosas raras
lineas=$(expr $lineas - $(expr $lineas % $salto))
mkdir $salida
cd $salida
for (( i=1; i<=$lineas; i+=$salto))
do
    wget "$url$(sed "$i"!d ../dos.html)"
done

# No borra los archivos dos.html. query.html y results.html
# para evitar que accidentalmente borre archivos que si se usan