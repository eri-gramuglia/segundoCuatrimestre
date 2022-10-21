import { Archivo } from "./claseArchivo";
import { Carpeta } from "./claseCarpeta";

let file1: Archivo = new Archivo("File1");
let file2: Archivo = new Archivo("File2");
let file3: Archivo = new Archivo("File3");

console.log("Archivos: ", file1, file2, file3);

let folder1: Carpeta = new Carpeta("Folder1", []);
console.log("Folder1: ", folder1);

folder1.agregar(file1);
console.log("Folder1: ", folder1);

let folder2: Carpeta = new Carpeta("Folder2", []);
console.log("Folder2: ", folder2);

folder2.agregar(file2);
folder2.agregar(file3);
folder2.agregar(folder1);

console.log("Folder2: ", folder2);

folder2.buscar("Folder1");