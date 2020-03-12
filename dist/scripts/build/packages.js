"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var webpack_1 = __importDefault(require("webpack"));
var path_1 = __importDefault(require("path"));
var cantara_config_1 = __importDefault(require("../../cantara-config"));
var webpackLibraryConfig_1 = __importDefault(require("../../util/config/webpackLibraryConfig"));
var fs_1 = require("../../util/fs");
var exec_1 = __importDefault(require("../../util/exec"));
var slash_1 = __importDefault(require("slash"));
function compile(config) {
    var compiler = webpack_1.default(config);
    return new Promise(function (resolve, reject) {
        compiler.run(function (err) {
            if (err) {
                reject(new Error('Error while compiling.'));
                return;
            }
            console.log('Successfully compiled!');
            resolve();
        });
    });
}
function buildPackage(app) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, include, _b, projectDir, _c, appDependencyAliases, packageAliases, cantaraRoot, allAliases, commonOptions, webpackCommonJsConfig, webpackUmdConfig, _d, libraryTargets, tsConfigPath, suppress, tsPath, packageJsonPath, packageJson, newPackageJson;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _a = cantara_config_1.default(), include = _a.allPackages.include, _b = _a.runtime, projectDir = _b.projectDir, _c = _b.aliases, appDependencyAliases = _c.appDependencyAliases, packageAliases = _c.packageAliases, cantaraRoot = _a.internalPaths.root;
                    allAliases = __assign(__assign({}, appDependencyAliases), packageAliases);
                    commonOptions = {
                        alias: allAliases,
                        app: app,
                        projectDir: projectDir,
                        include: include,
                    };
                    webpackCommonJsConfig = webpackLibraryConfig_1.default(__assign(__assign({}, commonOptions), { libraryTarget: 'commonjs2', noChecks: true }));
                    webpackUmdConfig = webpackLibraryConfig_1.default(__assign(__assign({}, commonOptions), { libraryTarget: 'umd', noChecks: false }));
                    _d = app.meta.libraryTargets, libraryTargets = _d === void 0 ? ['umd', 'commonjs'] : _d;
                    if (!libraryTargets.includes('commonjs')) return [3 /*break*/, 2];
                    return [4 /*yield*/, compile(webpackCommonJsConfig)];
                case 1:
                    _e.sent();
                    _e.label = 2;
                case 2:
                    if (!libraryTargets.includes('umd')) return [3 /*break*/, 4];
                    return [4 /*yield*/, compile(webpackUmdConfig)];
                case 3:
                    _e.sent();
                    _e.label = 4;
                case 4:
                    if (!!app.meta.skipTypeGeneration) return [3 /*break*/, 6];
                    tsConfigPath = path_1.default.join(app.paths.root, '.tsconfig.local.json');
                    suppress = app.meta.suppressTsErrors
                        ? " --suppress " + app.meta.suppressTsErrors.join(',') + "@"
                        : '';
                    tsPath = path_1.default.join(cantaraRoot, 'node_modules/typescript/lib/typescript.js');
                    return [4 /*yield*/, exec_1.default("tsc-silent --compiler " + tsPath + " --project " + tsConfigPath + suppress, {
                            workingDirectory: app.paths.root,
                            redirectIo: true,
                        })];
                case 5:
                    _e.sent();
                    _e.label = 6;
                case 6:
                    packageJsonPath = path_1.default.join(app.paths.root, 'package.json');
                    packageJson = fs_1.readFileAsJSON(packageJsonPath);
                    newPackageJson = __assign(__assign({}, packageJson), { main: "./" + slash_1.default(path_1.default.join(path_1.default.relative(app.paths.root, app.paths.build), app.name, 'src', 'index.js')) });
                    fs_1.writeJson(packageJsonPath, newPackageJson);
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = buildPackage;
