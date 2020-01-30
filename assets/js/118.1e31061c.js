(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{535:function(e,t,o){"use strict";o.r(t);var n=o(43),a=Object(n.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("🔥 Checkout our new Azure Developer page at "),o("a",{attrs:{href:"https://azure.com/developer?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("azure.com/developer"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("📺 Watch the video : "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=8EGJP7RPe1A&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=60&t=2s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to get started with Azure Machine Learning Service"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("💡 Learn more : Create complex machine learning models and train them with "),o("a",{attrs:{href:"https://azure.microsoft.com/services/machine-learning-service?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Machine Learning Service"),o("OutboundLink")],1)])]),e._v(" "),o("h4",{attrs:{id:"getting-started-with-azure-machine-learning-service-with-visual-studio-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-azure-machine-learning-service-with-visual-studio-code","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting Started with Azure Machine Learning service with Visual Studio Code")]),e._v(" "),o("p",[e._v("Machine learning is the art of building machine learning models that can make predictions based on the characteristics of a large data set. You can use these models to create applications that use artificial intelligence to expose intelligent features to users.")]),e._v(" "),o("p",[e._v("In Azure, you can create complex machine learning models and train them with data in a "),o("a",{attrs:{href:"https://azure.microsoft.com/services/machine-learning-service?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Machine Learning Service"),o("OutboundLink")],1),e._v(" workspace. This is a workspace where you can manage all of your machine learning tools and assets, like experiments, models, scripts and model deployments. And you can use the workspace to share your machine learning work with other data scientists in your team. In the Machine Learning Service workspace, you can create and train machine learning models and expose them to the outside world as APIs.")]),e._v(" "),o("p",[e._v("And to enable you to be more productive when you work with the Machine Learning Service, there is Azure Machine Learning for Visual Studio Code. Using this, you can connect to your Machine Learning Service workspace in Azure and do all of the things that you would do in the cloud, but now with powerful tools like IntelliSense, debugging and more.")]),e._v(" "),o("p",[e._v("Let's get started with Azure Machine Learning for VS Code and the Azure Machine Learning Service workspace.")]),e._v(" "),o("h4",{attrs:{id:"_1-install-azure-machine-learning-for-visual-studio-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-azure-machine-learning-for-visual-studio-code","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Install Azure Machine Learning for Visual Studio Code")]),e._v(" "),o("p",[e._v("Azure Machine Learning for Visual Studio Code enables you to locally create and run machine learning experiments, create and train models and much more. Most machine learning code that you would write is in Python. So when you install Azure Machine Learning for Visual Studio Code, the extension automatically also installs the Python for Visual Studio Code extension. And it also installs the Azure extension for Visual Studio Code as that's needed to connect to the cloud. Let's install the tools.")]),e._v(" "),o("ol",[o("li",[e._v("Make sure that you have the latest version of "),o("a",{attrs:{href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),o("OutboundLink")],1),e._v(" installed")]),e._v(" "),o("li",[e._v("In Visual Studio Code, go to the "),o("strong",[e._v("Extensions")]),e._v(" tab")]),e._v(" "),o("li",[e._v("In the "),o("strong",[e._v("Extensions")]),e._v(" tab, search for "),o("strong",[e._v('"Azure Machine Learning"')])]),e._v(" "),o("li",[e._v("In the search results, click on "),o("strong",[o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vscode-ai",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Machine Learning for Visual Studio Code"),o("OutboundLink")],1)]),e._v(" and click on "),o("strong",[e._v("install")])])]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/FindTheExtensionInVSCode.png")}}),e._v(" "),o("p",[e._v("(Azure Machine Learning for Visual Studio Code in the marketplace)")]),e._v(" "),o("ol",{attrs:{start:"5"}},[o("li",[e._v("Once the tools are installed, reload Visual Studio Code by restarting it. This will load the extension")]),e._v(" "),o("li",[e._v("Before installing the Azure ML SDK, you need Python to be installed on your machine. Download the latest version "),o("a",{attrs:{href:"https://www.python.org/downloads'",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v('"> and install it')]),e._v(" "),o("li",[e._v("Now you need to install the "),o("a",{attrs:{href:"https://docs.microsoft.com/python/api/overview/azure/ml/intro?view=azure-ml-py?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure ML SDK"),o("OutboundLink")],1),e._v(". In Visual Studio Code, press "),o("strong",[e._v("CTRL + SHIFT + P")]),e._v(" (or "),o("strong",[e._v("COMMAND + SHIFT + P")]),e._v(" on Mac) to open up the command window")]),e._v(" "),o("li",[e._v("Type "),o("strong",[e._v("Install Azure ML SDK")]),e._v(" and run the command. A local private Python environment will be created that has the Visual Studio Code prerequisites for working with Azure Machine Learning")]),e._v(" "),o("li",[e._v("In the left-hand menu of Visual Studio Code, you'll find the "),o("strong",[e._v("Azure")]),e._v(" menu item. Click on that")]),e._v(" "),o("li",[e._v("You are now prompted to sign in with your Azure credentials. Follow the instructions")])]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/SignInToAzure.png")}}),e._v(" "),o("p",[e._v("(Sign in to Azure in Visual Studio Code)")]),e._v(" "),o("h4",{attrs:{id:"_2-create-a-machine-learning-service-workspace-and-work-with-it"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-a-machine-learning-service-workspace-and-work-with-it","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. Create a Machine Learning Service workspace and work with it")]),e._v(" "),o("p",[e._v("We now have all of the tools that we need to work with the Azure Machine Learning Service. Let's create a new workspace from Visual Studio Code and work with it.")]),e._v(" "),o("ol",[o("li",[e._v("in Visual Studio Code, in the Azure tab, you'll now find a button that says "),o("strong",[e._v('"Click here to create a workspace"')]),e._v(". Click on it to start creating a new workspace")])]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/CreateAMLWorkSpace.png")}}),e._v(" "),o("p",[e._v("(Create a new Azure Machine Learning Service workspace from Visual Studio Code)")]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v("Pick an "),o("strong",[e._v("Azure subscription")])]),e._v(" "),o("li",[e._v("Pick or create a "),o("strong",[e._v("Resource group")])]),e._v(" "),o("li",[e._v("Type a "),o("strong",[e._v("Name")]),e._v(" and hit Enter. This will start creating the workspace. The workspace will be created in Azure and Visual Studio Code will be connected to the workspace. This can take a few minutes")])]),e._v(" "),o("p",[e._v("Once the workspace is created in Azure, you can navigate to it to get started. The workspace supports working with Jupyter notebooks from the Azure Notebooks service to run Python code. We'll use some of these notebooks to get started.")]),e._v(" "),o("ol",[o("li",[e._v("In the Azure portal, in the Azure Machine Learning Service workspace, click on "),o("strong",[e._v("Get Started in Azure Notebooks")]),e._v(" button. This might prompt you to log in again and grant Azure Notebooks administrative rights")])]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/GetStartedWithNoteBooks.png")}}),e._v(" "),o("p",[e._v("(Get Started in Azure Notebooks button in the Azure portal)")]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v("Azure Notebooks will prompt you to clone the notebook from GitHub to your Azure Notebooks instance. Click "),o("strong",[e._v("Clone")]),e._v(" to get the files")]),e._v(" "),o("li",[e._v("Once the notebook is cloned, click on "),o("strong",[e._v("01.run-experiment.ipynb")]),e._v(" to open the first notebook")]),e._v(" "),o("li",[e._v("A notebook contains explanations and code that can be executed. This is a great way for data scientists to create data manipulation and machine learning code and explain what it does and how to run it. We'll run all of the code in this notebook to create a first experiment in our workspace. Click on the "),o("strong",[e._v("Cells")]),e._v(" menu and click on "),o("strong",[e._v("Run all")]),e._v(". This will create and run the Monte Carlo simulation as an experiment, which tries to estimate pi")])]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/RunNotebook.png")}}),e._v(" "),o("p",[e._v("(Run all in Azure Notebooks)")]),e._v(" "),o("ol",{attrs:{start:"5"}},[o("li",[e._v("We've now created an experiment and ran it and we can see that in Visual Studio Code. In there, refresh the workspace and you'll see the experiment. You can now right-click on it and click on "),o("strong",[e._v("View Experiment")]),e._v(". This will open the experiment and allows you to analyze the runs of the experiment")])]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/ExperimentInVSCode.png")}}),e._v(" "),o("p",[e._v("(Experiment in Visual Studio Code)")]),e._v(" "),o("ol",{attrs:{start:"6"}},[o("li",[e._v("Go back to the Azure Notebook. At the bottom of this notebook, there is a link to a notebook to "),o("strong",[e._v("Deploy web service")]),e._v(". Click on that link. Alternatively, you can go back to the notebook files and click on "),o("strong",[e._v("02.deploy-web-service.ipynb")])]),e._v(" "),o("li",[e._v("This notebook will deploy a webservice that contains a model that can calculate the area of a circle using the estimate of pi that was the result of the experiment that we ran earlier. The webservice will be deployed to a container that runs in an Azure Container Instance. Run the cells in the notebook one by one by "),o("strong",[e._v("clicking on the Run button")]),e._v(". Skip running the last cell as that will delete the webservice. Wait for the output of each step as you might need to log in again and grant administrative rights. When the notebook is done running, you can see the newly created resources in Visual Studio Code")])]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/DeployedNotebook2.png")}}),e._v(" "),o("p",[e._v("(New resources in Visual Studio Code after running the notebook)")]),e._v(" "),o("p",[e._v("You can do all of this from Visual Studio Code as well as it is a very good Python development environment.")]),e._v(" "),o("h4",{attrs:{id:"conclusion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),o("p",[e._v("Azure Machine Learning Service is a very powerful AI service that allows you to create and run experiments, create models and train them, deploy models to webservices and to manage compute like Azure Container instances and Azure Kubernetes Service. And you can do all of this from "),o("a",{attrs:{href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),o("OutboundLink")],1),e._v(" with "),o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vscode-ai",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Machine Learning for Visual Studio Code"),o("OutboundLink")],1),e._v(". Go and check it out.")])])},[],!1,null,null,null);t.default=a.exports}}]);