import * as fs from "fs";
import * as path from "path";

// Function to create directories recursively
function createDirectories(filePath: string) {
  console.log(`Creating directories for path: ${filePath}`);
  if (!fs.existsSync(filePath)) {
    console.log(`Creating directory: ${filePath}`);
    fs.mkdirSync(filePath, { recursive: true });
  } else {
    console.log(`Directory already exists: ${filePath}`);
  }
}

// Function to create a file with the provided content
function createFile(filePath: string, content: string) {
  console.log(`Creating file: ${filePath}`);
  fs.writeFileSync(filePath, content, { encoding: "utf8" });
}

// Function to read a template file and replace placeholders
function generateFileContent(templatePath: string, replacements: Record<string, string>) {
  const template = fs.readFileSync(templatePath, { encoding: "utf8" });
  return template.replace(/{{(\w+)}}/g, (_, key) => replacements[key] || "");
}

// Main function to generate the file structure and content
function generateFiles(basePath: string) {
  console.log(`Generating files for path: ${basePath}`);
  const baseDir = path.join("src", basePath);
  const componentName = path.basename(basePath);

  console.log(`Current working directory: ${process.cwd()}`);
  console.log(`Base directory: ${baseDir}`);

  // Ensure the directory exists
  createDirectories(baseDir);

  // Read and generate files from templates
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  const templatesDir = path.join(__dirname, "templates");

  // Component file
  const componentTemplatePath = path.join(templatesDir, "component.tsx.template");
  const componentContent = generateFileContent(componentTemplatePath, { componentName });
  createFile(path.join(baseDir, `${componentName}.tsx`), componentContent);

  // Stories file
  const storiesTemplatePath = path.join(templatesDir, "stories.tsx.template");
  const storiesContent = generateFileContent(storiesTemplatePath, { componentName, basePath });
  createFile(path.join(baseDir, `${componentName}.stories.tsx`), storiesContent);

  // Index file
  const indexTemplatePath = path.join(templatesDir, "index.ts.template");
  const indexContent = generateFileContent(indexTemplatePath, { componentName });
  createFile(path.join(baseDir, "index.ts"), indexContent);
}

// Example usage
const inputPath = process.argv[2];
if (!inputPath) {
  console.error("Error: Please provide a path");
  process.exit(1);
}

if (inputPath.startsWith("src")) {
  console.error("Error: Path should not start with 'src'");
  process.exit(1);
}

console.log(`Current working directory: ${process.cwd()}`);
console.log(`Generating files for path: ${inputPath}`);
generateFiles(inputPath);
console.log("File generation complete");
