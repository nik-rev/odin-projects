const AllQuestions = [
  {
    question: "Explain how a linear search works?",
    answers: [
      "1. Linear search compares the search item with the first value",
      "2. Then it compares the search item with the next value",
      "3. Repeat steps 1-2 until the end of the array has been reached, in which case it returns -1 as the search value wasnt found",
      "4. Repeat steps 1-2 until the search item is found, then return the array position",
    ],
  },
  {
    question: "What does it mean to pass a parameter by value?",
    answers: [
      "1. The function receives a copy of the variable",
      "2. Makes changes to the copy of the variable",
      "3. Does not overwrite the data in the original variable",
      "4. Does not keep the changes after the function ends",
    ],
  },
  {
    question: "What does it mean to pass a parameter by reference?",
    answers: [
      "1. The function receives the memory location of the data",
      "2. It makes changes to the original variable",
      "3. It doesn't overwrite the data in the original variable",
      "4. It keeps the changes after the function ends",
    ],
  },
  {
    question: "Give 3 benefits of writing a program with reusable components",
    answers: [
      "1. Saves time from having to write the same algorithm repeatedly",
      "2. Reduced testing requirements",
      "3. Can be taken and used in different programs as well as the program they are written in",
    ],
  },
  {
    question: "Compare breadth-first and depth-first traversal",
    answers: [
      "1. Breadth is more efficient when the data searched for is closer to the root",
      "2. Depth is more efficient when the data to be search for is further down",
      "3. Depth memory requirement is linear",
      "4. Depth can be written recursively to aid understanding",
      "5. Breadth in general is better time complexity",
      "6. In large trees depth may never return a value",
    ],
  },
  {
    question: "Give 5 features of Data Mining and 6 outcomes of data mining",
    answers: [
      "1. Datamining searches large amounts of data",
      "2. It searches for relationships between facts that may not be obvious",
      "3. It may include pattern matching/anomaly detection algorithms",
      "4. It is used for business modelling",
      "5. It is used to plan for future events",
      "6. It can be used to introduce new features",
      "7. This would lead to an increased use from users and greater revenue due to more users",
      "8. Remove features people don't use",
      "9. Can be used to target advertising",
      "10. It can have privacy concerns",
      "11. Information may be misused",
    ],
  },
  {
    question: "Define pipelining",
    answers: [
      "1. Concurrent processing of multiple instructions",
      "2. One instruction can be fetched while another is being decoded and another is being executed",
    ],
  },
  {
    question: "Compare Lossy vs Lossless compression",
    answers: [
      "1. Lossy permanently removes data. Lossless rewrites original data more efficiently",
      "2. Lossy is not able to recreate original file. Lossless is able to recreate original file",
      "3. Lossy reduces quality. Lossless keeps original quality",
      "4. Lossy file size is smaller than if lossless was used",
    ],
  },
  {
    question: "Compare Compiler and an Interpreter",
    answers: [
      "1. Compiler translates code all at once, Interpreter translates code line by line during runtime",
      "2. Compiler produces executable file for reuse, Interpreter needs to re-translate next time program is run",
      "3. Compiled code doesn't run if there are any errors, Interpreter stops at the first error",
      "4. Compiled programs have the source code hidden, Interpreted programs have the source code visible",
    ],
  },
  {
    question: "Describe magnetic storage",
    answers: [
      "1. Magnetic devices include magnetic hard drives and magnetic tape",
      "2. Data is stored by altering the magnetic field of a small section of the tape or disk, one orientation is a 1, the opposite is a 0",
      "3. Written to using a read/write head, the read/write head can read magnetic fields and retrieve the data.",
      "4. The read/write head moves across the disk",
      "5. Large capacity and cheap, but fragile when moved. Good at storing lots of data at cheap cost and good for backup",
    ],
  },
  {
    question: "Explain Extreme Programming",
    answers: [
      "1. Extreme programming is a software development methodology",
      "2. Focus is on good quality code",
      "3. It is an agile paradigm and designed to allow development to respond to changing user requirements",
      "4. Involves pair programming",
      "5. Program is constantly undergoing iterative development process",
    ],
  },
  {
    question: "Environmental impacts of computers",
    answers: [
      "1. Materials and fuel used in producing and transporting computers has an environmental impact",
      "2. Devices have short lifespans and are quickly disposed of",
      "3. Often end up in a landfill or are sent to 3rd world countries to be dismantled due to the value of some of the materials inside of them",
      "4. These devices are often made up of toxic materials such",
      "5. These can harm people disposing of the waste and damage/pollute the area in which they are buried/burned",
      "6. People have many digital devices, these all need powering/charging, which causes an increase in demand in electricity, increase in fossil fuels being burned",
      "7. Computers have encouraged a paperless approach which has the potential deforestation",
      "8. Computers have allowed people to work from home so they dont have to travel, reducing traffic and pollution",
    ],
  },
  {
    question: "What is the purpose of a network switch",
    answers: [
      "1. Joins computers together on a LAN",
      "2. Receives and sends data to the specific computer",
      "3. Recipient's address is given in packet header",
    ],
  },
  {
    question: "What is a linker",
    answers: [
      "1. Linker links main program to libraries",
      "2. Linkers can either include them in the final executable code",
      "3. Or, linkers can get the executable code to point to the external libraries",
    ],
  },
  {
    question: "Describe encryption",
    answers: [
      "1. Encryption means that data is scrambled so that if it is received it cannot be understood",
      "2. A key is required to decrypt",
      "3. Symmetric encryption uses on key for encrypt/decrypt and so key exchange is problematic",
      "4. Assymetric encryption uses public and private keys so no need to exchange keys",
      "5. Regulation of Investigatory Powers gives authorities the power to compel disclosure of encryption keys",
      "6. Encrypted messages cannot be read by outsiders without the key",
    ],
  },
  {
    question: "Explain the threats to a network",
    answers: [
      "1. Malware and viruses are software that can have a negative impact on computer systems",
      "2. Spyware and keyloggers record information input and send back to third party",
      "3. Phishing attacks attempt to steal data by fraudulently appearing as legitimate emails asking for secure information",
      "4. Denial of service attacks can overload a computer with traffic and effectively disable access for legitimate users",
      "5. Can be prevented by using firewall to restrict traffic entering and leaving the network",
      "6. Using up-to-date software and restricted access to wireless networks can limit risks, as well as not using USBs",
    ],
  },
  {
    question: "Describe the computer misuse act",
    answers: [
      "1. Legislation aimed at criminalising unauthorised access to a computer system",
      "2. Unauthorised access to a computer system, Unauthorised access with intent to commit further offences, Unauthorised modification of computer material",
      "3. Punishable by up to 12 months in prison and an unlimited fine",
      "4. White hat hackers will not break this law. Requires authorisation from system owner",
    ],
  },
  {
    question: "Describe the different modes of addressing memory.",
    answers: [
      "1. Immediate addressing: The operand holds the actual data to be used, LDA 6 would load value 6",
      "2. Immediate addressing allows simple access to data with no fetch required but limited by data size of operand",
      "3. Direct addressing: Operand holds the address that holds the data to be used, LDA 6 loads data at address 6",
      "4. Direct addressing allows data to be fetched from memory. Data can potentially be larger in size that with immediate addressing but address range limited by size of operand",
      "5. Indirect addressing: Operand holds an address which is where the data to be used is stored, LDA 6 loads data at address 6, which itself is used to load data at that address",
      "6. Indirect addressing allows a larger range of addresses to be accessed as address fetched. But multiple fetches required to access data",
      "7. Indexed addressing: Operand holds an address which is offset using the Index Register to find the true address of the data to be used, LDA 6 would load the 6th indexed element",
      "8. Indexed addressing allows the index register to be manipulated to access data stored sequentially for example in an array",
    ],
  },
  {
    question: "Describe SSD storage (solid-state drive)",
    answers: [
      "1. Store data using semiconductors",
      "2. Drivers can be based on NAND flash or DRAM",
      "3. No moving parts are required",
      "4. Are fast and access data faster, but they have a smaller capacity.",
      "5. Limited lifespan due to limited read/writes",
    ],
  },
  {
    question: "Describe the spiral model methodology",
    answers: [
      "1. Spiral model has four quadrants: Determine Objectives, Identify and Manage Risk, Develop and Test, Plan next iteration",
      "2. Spiral model requires client feedback, which informs future development and prototypes which feedback into future revisions",
      "3. Spiral model produces functional prototypes where features are added incrementally",
      "4. Spiral model has its focus mostly on risk, projects may be modified or dropped if risk is too great, which makes it good at risk management",
    ],
  },
  {
    question: "Describe the waterfall lifecycle methodology",
    answers: [
      "1. Waterfall has a structured analysis/design/development/test flow. Progress to the next step is not made until the previous has been completed.",
      "2. Waterfall is very structured and very reliant on getting the definition of requirements correct at the start.",
      "3. This forces the project to be well understood before it is began",
      "4. Waterfall is good where requirements are very clear and outcomes are known.",
    ],
  },
  {
    question: "How is the PC and accumulator used during the FDE cycle",
    answers: [
      "1. The PC holds the address of the next instruction to be fetched/decoded, contents copied to MAR at start of FDE, incremented by +1 every cycle",
      "2. The accumulator holds all input/output and stores data which has come from the RAM",
    ],
  },
  {
    question: "Compare RISC and CISC instruction sets and evaluate",
    answers: [
      "1. CISC is complex instruction set. Lots of instructions available. RISC is reduced instruction set. Smaller number of instructions available. Several RISC instructions can be combined to perform the same tasks as CISC processors.",
      "2. RISC has less complex circuitry. CISC circuits are more complicated and expensive.",
      "3. RISC instructions can take one cycle whereas CISC instructions can take several",
      "4. RISC can only do complex things by combining multiple instructions, whereas CISC is done in one line",
      "5. Compilers for RISC need to be more complex than compilers for CISC",
      "6. CISC are more expensive and less power efficient and require larger battery and cooling mechanics but can accomplish more",
    ],
  },
  {
    question:
      "State the worst, best and average time complexity for a binary & linear search, and merge sort and quick sort and insertion sort",
    answers: [
      "1. Binary search -> Worst: O(1), Best: O(1), Average: O(log(n))",
      "2. Linear search -> Worst: O(1), Best: O(1), Average: O(n)",
      "3. Merge sort -> Worst, Best, Average: O(nlog(n))",
      "4. Quick sort -> Worst: O(n^2), Best, Average: O(nlog(n))",
      "5. Insertion sort -> Worst, Average: O(n^2), Best: O(n)",
    ],
  },
  {
    question:
      "Describe the features & impact of an IDE and (Integrated development environment)",
    answers: [
      "1. IDE is software that includes an editor, compiler & a run-time environment",
      "2. It has autocorrect & autocomplete functionality to help create code",
      "3. It can help with testing the code with a debugger, which allows to set breakpoints and step through lines 1-by-1",
      "4. It can also help with testing the code with a variable watch window",
      "5. It can help reduce errors",
      "6. It can help reduce time spent to write the program [with a justification]",
      "7. It allows to write and test in one environment which makes it easier to code since you dont have to write in 1 place, run in another place",
    ],
  },
  {
    question: "Explain what is meant by decomposition",
    answers: [
      "1. Splits the problem into smaller sub problems",
      "2. Repeated decomposition gives solvable parts",
      "3. The division can lead to the development of subroutines",
      "4. The division can lead to a logical division between programmers/teams",
      "5. For example one team works on one thing, another team works on another thing",
    ],
  },
  {
    question: "Concurrent processing",
    answers: [
      "1. Processes are happening at the same time",
      "2. One process may need to start before a second has finished",
      "3. Individual processes are threads, and each thread has a life line",
      "4. One request will be sent to the server, this will have a thread",
    ],
  },
  {
    question: "Types of Operating Systems",
    answers: [
      "1. Multi-tasking: Runs multiple programs at once",
      "2. Embedded: Run on dedicated hardware using low-power processors with very little memory, for example on a washing machine",
      "3. Distributed: The OS controls and coordinates the computers presenting them to the user as if they were one system",
      "4. Multi-User: Computer manages the user's permissions and access rights when they log in, server OS software handles multiple people using different computers on a network at the same time",
      "5. Real-time: Plenty of redundancy is built into these systems so they can handle sudden increases in input, these rarely run at capacity, runs actions within a guaranteed amount of time",
    ],
  },
  {
    question: "Explain how a bubble sort works?",
    answers: [
      "1. Bubble Sort iteratively compares adjacent elements in the array.",
      "2. If the current element is larger than the next, they swap positions.",
      "3. This process repeats for each pair of adjacent elements, 'bubbling up' the largest element to the end of the array.",
      "4. The process is repeated for the remaining unsorted portion of the array, reducing its size by one each time.",
      "5. Sorting concludes when no more swaps are needed.",
    ],
  },
  {
    question: "Explain how a binary search works?",
    answers: [
      "1. Binary Search operates on a sorted array.",
      "2. It begins by comparing the middle element of the array with the target value.",
      "3. If the target value matches the middle element, the search concludes.",
      "4. If the target is smaller, the search continues on the left half of the array; if larger, on the right half.",
      "5. This halving continues until the target is found or the subarray reduces to zero size.",
    ],
  },
  {
    question: "Compare Harvard and Von Neumann Architecture",
    answers: [
      "1. Harvard uses separate memory addresses for instructions and data, von neumann uses same physical memory address for instructions & data",
      "2. Harvard processor needs one cycle to complete an instruction, von neumann needs two clock cycles to execute an instruction",
      "3. Harvard has control unit for two buses is more complicated which adds to the development cost, von neumann has simpler control unit and development of one is cheaper and faster",
      "4. Harvard data transfers and instruction fetches can be performed at the same time, while von neumann data transfers and instruction fetches cannot be",
    ],
  },
  {
    question: "List the downsides and upsides of optical storage",
    answers: [
      "1. DVD & Blu-ray",
      "2. Works by shining a laser on the media & processing the reflection off the media",
      "2. Optical storage is cheap to produce",
      "3. It is also lightweight & portable",
      "4. Optical storage has slow access time & it is prone to scratches",
    ],
  },
  {
    question:
      "What are the definitions of Class, Object, Attribute, Method, Inheritance, Encapsulation",
    answers: [
      "1. Class: Template defining methods and attributes used to make objects",
      "2. Object: Instantiated from class",
      "3. Attribute: Variable held by an object",
      "4. Method: Function an object performs",
      "5. Inheritance: Class inherits the methods and attributes of parent class, the child can have its own",
      "6. Encapsulation: Private attributes can only be changed with public methods",
    ],
  },
  {
    question: "Explain what is meant by ACID",
    answers: [
      "1. Atomicity: Change is either performed or not performed. Half-finished changes must halt",
      "2. Consistency: Databases have rules. Transactions should never break these rules",
      "3. Isolation: Transaction must not be able to be affected by a different transaction",
      "4. Durability: Once written, transactions must not be lost in case of system failure",
    ],
  },
  {
    question: "What happens in the TCP/IP stack",
    answers: [
      "1. Application layer: Protocol to be used is decided based on application for eg HTTPS for browser service, +Adds encryption, Passes to transport layer to send, Gets data from transport layer when receiving, +Decrypts message",
      "2. Transport layer: Establishes end-to-end connections, +When connection is made it splits the data to be transmitted into packets, +In every packet there is the number of the packet, the total number of packets, and the port number the packet should use",
      "3. Internet layer: Adds SOURCE IP and DESTINATION IP to each packet",
      "4. Link layer: Receives layered data from internet layer to send, passes layered data back up to internet layer when receiving, adds MAC address",
    ],
  },
  {
    question: "Explain record locking",
    answers: [
      "1. The outcome of concurrent transactions is the same as if transactions were completed sequentially",
      "2. Record locking allows one user to modify record level data at any one time",
      "3. Data that is being used elsewhere cannot be modified",
      "4. Disadvantage: Prevents anyone accessing a record in use by another person, with delays or deadlock.",
    ],
  },
  {
    question: "Explain referential integrity",
    answers: [
      "1. Referential integrity ensures changes are consistent across a database",
      "2. If a record is removed all references to it are removed",
      "3. A foreign key value must have a corresponding primary key value in another table",
    ],
  },
  {
    question: "Explain difference between RAM and ROM",
    answers: [
      "1. RAM is volatile",
      "2. RAM is used for storing parts of the OS currently in use",
      "3. ROM is non-volatile",
      "4. ROM is used for storing BIOS of the computer",
    ],
  },
  {
    question: "How do compilers work",
    answers: [
      "1. Lexical analysis: Comments and whitespace removed, variable names added to a symbol table, code turned into a series of tokens",
      "2. Syntax analysis: Abstract syntax tree is built from tokens produced in the previous stage, checks the code follows the syntax, generates errors if any tokens break the rules of the language",
      "3. Code generation: Abstract code tree is converted to object code, object code is machine code produced before the final step (linker) is run",
      "4. Code optimisation: Tweaks the code so it will run as quickly and use as little memory as possible",
    ],
  },
  {
    question: "Requirements of hashing",
    answers: [
      "1. Hashes have to be irreversible: Impossible to find the input given only output",
      "2. They must be deterministic: Same input will always give same output",
      "3. Hashes must have collision resistance: Reduce number of collisions by making sure all outputs are equally likely",
      "4. Hashes are useful for searching through hash tables fast",
      "5. Hashes are also useful for encryption",
    ],
  },
  {
    question: "Explain what is meant by Packet Switching",
    answers: [
      "1. Data is split into chunks called packets which have labels including address being sent to and order",
      "2. Each packet is sent on the most convenient route meaning they may arrive in a different order to which they were sent",
      "3. Once packets arrive they are reordered",
    ],
  },
  {
    question: "Explain what is meant by a library",
    answers: [
      "1. Library is a section of code written by other programmers containing useful routines like GUI routines, encryption",
    ],
  },
  {
    question: "Explain how an Insertion sort works?",
    answers: [
      "1. Insertion Sort builds a sorted subarray at the beginning of the array.",
      "2. It starts with the second element, comparing it with the first and swapping if necessary.",
      "3. It then picks the next element and inserts it into its correct position within the sorted subarray.",
      "4. This process continues, incrementally extending the sorted subarray and inserting the next element in the correct position.",
      "5. The sort completes when the entire array is sorted.",
    ],
  },
  {
    question: "Explain how a selection sort works?",
    answers: [
      "1. Selection Sort divides the array into a sorted and an unsorted subarray.",
      "2. It repeatedly selects the smallest (or largest) element from the unsorted subarray.",
      "3. This element is then swapped with the first unsorted element, moving it to the sorted subarray.",
      "4. The boundary between sorted and unsorted subarrays shifts one element to the right.",
      "5. The process repeats until the entire array is sorted.",
    ],
  },
  {
    question: "Explain how a quick sort works?",
    answers: [
      "1. Quick Sort selects a 'pivot' element from the array.",
      "2. The array is partitioned into two subarrays: elements less than the pivot and elements greater than the pivot.",
      "3. The pivot is then placed in its correct sorted position.",
      "4. The process is recursively applied to the two subarrays.",
      "5. The sort concludes when the base case of a subarray with fewer than two elements is reached.",
    ],
  },
  {
    question: "The class video has these attributes:",
    answers: [
      "• name",
      "• number of views",
      "• star rating.",
      "The constructor method will set the name attribute to the name that is passed in as a parameter. The constructor will also initially set the number of views to 0 and the star rating to 3.",
      "Write program code or pseudocode to declare the class video and initialise the required attributes as private.",
      "Answer:",
      "1. class Video:",
      "2.     def __init__(self, name):",
      "3.        self.__name = name",
      "4.        self.__views = 0",
      "5.        self.__star_rating = 3",
    ],
  },
  {
    question:
      "Each worker has a name and an attendance figure which can be between 0 and 100.",
    answers: [
      "Write a definition for a fully encapsulated customer class, providing both get and set methods for all attributes. You do not have to write code for the constructor method",
      "Answer:",
      "1. class Customer:",
      "    def get_name(self):",
      "        return self.__name",
      "2.    def get_attendance(self):",
      "        return self.__attendance",
      "3.    def set_name(self, new_name):",
      "        self.__name = new_name",
      "4.    def set_attendance(self, new_attendance):",
      "        if 0 <= new_attendance <= 100:",
      "            self.__attendance = new_attendance",
    ],
  },
  {
    question: "Write program code or pseudocode to declare the class house.",
    answers: [
      "Define the attributes and constructor method in your answer. You do not need to write the get or set methods. Inherits from building class and has pFloors, pWidth, pHeight, pBedrooms, pBathrooms",
      "Answer:",
      "1. class House(Building):",
      "2.    def __init__(self, pFloors, pWidth, pHeight, pBedrooms, pBathrooms):",
      "3.        super().__init__(pFloors, pWidth, pHeight)",
      "4.        self.__bedrooms = pBedrooms",
      "5.        self.__bathrooms = pBathrooms",
    ],
  },
];
