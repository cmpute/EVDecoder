using System;
using System.IO;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;

//initialize
Console.WriteLine("Initializing...");
const string driver = "https://raw.githubusercontent.com/ghostgzt/ExView/master/init.jsonp"; // list address
const string savepath = "D:\\ExView\\";
const string featurepath = "features\\";
const string pluginspath = "plugins\\";
const bool decode = true; //decode chinese characters
const bool debug = false;
int debugcount = 2;

var quote = new Regex("\\\".{0,}?\\\"", System.Text.RegularExpressions.RegexOptions.Compiled); // json quote content parser
var bracket = new Regex("{.+?}", System.Text.RegularExpressions.RegexOptions.Compiled); // json bracket content parser
WebClient client = new WebClient() { Encoding = Encoding.UTF8 };
StringBuilder sb = new StringBuilder();
Directory.CreateDirectory(savepath);
Directory.CreateDirectory(savepath + featurepath);
Directory.CreateDirectory(savepath + pluginspath);


//parse list
Console.WriteLine("Fetching Plugin List...");
string listtext = client.DownloadString(driver);
var start = listtext.IndexOf('[');
var end = listtext.IndexOf(']', start);
var listjson = listtext.Substring(start + 1, end - start - 1);
File.WriteAllText(savepath + "list.json", listjson);
var pluginjsons = bracket.Matches(listjson);

//parse plugins
foreach (Match pluginjson in pluginjsons)
{
    //parse info
    var contents = quote.Matches(pluginjson.Value);
    string name = contents[1].Value.Trim(new[] { '"' });
    Console.WriteLine("Parsing " + name + ":");
    bool isfeature = contents[2].Value == "\"¹¦ÄÜ\"";
    if (isfeature) Console.WriteLine("\tIt is a feature.");
    string addr = contents[contents.Count - 1].Value.Trim(new[] { '"' });
    Console.WriteLine($"\tDownloading from {contents[contents.Count - 1].Value}...");
    string words = client.DownloadString(addr);

    //concat json
    Console.WriteLine("\tConcating...");
    sb.Clear();
    var matches = quote.Matches(words);
    sb.Append(matches[2].Value, 2, matches[2].Value.Length - 3); // no idea about the middle content
    sb.Append(matches[0].Value, 2, matches[0].Value.Length - 3);
    string word = sb.ToString();

    //hex to char
    Console.WriteLine("\tParsing...");
    sb.Clear();
    for (int i = 0; i < word.Length / 2; i++)
        sb.Append((char)Convert.ToByte(string.Concat(word[2 * i], word[2 * i + 1]), 16));
    string result = decode ? Regex.Replace(sb.ToString(), "\\\\u[0-9|abcdef]{4}", (match) => Regex.Unescape(match.Value)) : sb.ToString();
    
    //write to file
    string path = savepath + (isfeature ? featurepath : pluginspath) + name + ".js";
    Console.WriteLine($"\tSaving to {path} ...");
    File.WriteAllText(path, result);
    
    Console.WriteLine("\tSuccess!");
    if (debug) if (debugcount-- <= 0) break; //fetch for only one time for debugging
}