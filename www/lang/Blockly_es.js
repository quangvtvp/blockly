'use strict';
goog.provide ( 'Blockly.Msg.fr');
goog.require ( 'Blockly.Msg');

Blockly.Msg.INOUT_HIGH_LEVEL = "1(estado alto)";
Blockly.Msg.INOUT_LOW_LEVEL = "0(estado bajo)";
Blockly.Msg.ARD_TYPE_CHAR = "carácter";
Blockly.Msg.ARD_TYPE_TEXT = "texto";
Blockly.Msg.ARD_TYPE_BOOL = "binario";
Blockly.Msg.ARD_TYPE_SHORT = "byte";
Blockly.Msg.ARD_TYPE_NUMBER = "entero";
Blockly.Msg.ARD_TYPE_UNUMBER = "unsigned integer";
Blockly.Msg.ARD_TYPE_LONG = "entero largo";
Blockly.Msg.ARD_TYPE_DECIMAL = "número de coma flotante";
Blockly.Msg.ARD_TYPE_ARRAY = "cadena";
Blockly.Msg.ARD_TYPE_NULL = "vacío";
Blockly.Msg.ARD_TYPE_UNDEF = "no definido";
Blockly.Msg.ARD_TYPE_VOLATILE = "entero volatil";
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = "typing missing on a block";
Blockly.Msg.ARDUINO_BETWEEN = "número aleatorio entre";
Blockly.Msg.ARDUINO_BETWEEN_AND = "y";
Blockly.Msg.ARDUINO_VAR_DECLARE="estados";
Blockly.Msg.ARDUINO_VAR_AS = "cómo";
Blockly.Msg.ARDUINO_VAR_VAL = "de valor";
Blockly.Msg.base_def_const = "fijar";
Blockly.Msg.base_define_const = "que es equivalente a";
Blockly.Msg.base_define_const_tooltip = "permite al programador dar un nombre a cualquier valor";
Blockly.Msg.type = "establecer un valor como el tipo seleccionado";
Blockly.Msg.ADD_COMMENT = "Agregar comentario";
Blockly.Msg.CHANGE_VALUE_TITLE = "Cambiar valor:";
Blockly.Msg.CLEAN_UP = "Limpiar Bloques";
Blockly.Msg.COLLAPSE_ALL = "Minimizar Bloques";
Blockly.Msg.COLLAPSE_BLOCK = "Minimizar Bloque";
Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE = "cuando";
Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT = "por defecto";
Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK = "es";
Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR = "si la variable es válida";
Blockly.Msg.CONTROLS_SWITCH_MSG_DO = "hacer";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1 = "Si un valor es verdadero, ejecute los siguientes comandos";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2 = "Si un valor es verdadero, ejecute el primer bloque de comandos, de lo contrario, ejecute el siguiente bloque de comandos";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3 = "Si un valor es verdadero, ejecute el primer bloque de comandos, de lo contrario, ejecute el siguiente bloque de comandos si la condición es verdadera";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4 = "Si un valor es verdadero, ejecute el primer bloque de comandos, de lo contrario, ejecute el siguiente bloque de comandos si la condición es verdadera. Si no se cumple ninguna condición, cree el bloque de comandos predeterminado" ;
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "salir del bucle";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "pasar a la siguiente iteración";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Salir del bucle";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Omita el resto de este ciclo y continúe con la siguiente iteración";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = "Advertencia: este bloque debe usarse en un bucle";
Blockly.Msg.CONTROLS_FOREACH_TITLE = "para cada elemento %1 en la lista %2";
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = "Para cada elemento de una lista, asigne el valor del elemento a la variable %1, y luego ejecute las declaraciones";
Blockly.Msg.CONTROLS_FOR_TITLE = "para %1 comprendido de %2 a %3 en pasos de %4";
Blockly.Msg.CONTROLS_FOR_TOOLTIP = "Establezca la variable %1 en valores desde el número inicial hasta el número final, incrementándolo en un paso específico, y ejecute las declaraciones especificadas";
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = "Agregar Condición";
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = "Agregar una condición final";
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = "Agregar, borrar o reordenar";
Blockly.Msg.CONTROLS_IF_MSG_ELSE = "otro";
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = "si no";
Blockly.Msg.CONTROLS_IF_MSG_IF = "si";
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = "Si un valor es verdadero, entonces ejecute algunas órdenes";
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = "Si un valor es verdadero, ejecute el primer bloque de órdenes, de lo contrario ejecute el segundo bloque de órdenes";
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = "Si el primer valor es verdadero, ejecute el primer bloque de órdenes, de lo contrario, si el segundo valor es verdadero, ejecute el segundo bloque de órdenes";
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = "Si el primer valor es verdadero, ejecute el primer bloque de órdenes, de lo contrario, si el segundo valor es verdadero, ejecute el segundo bloque de órdenes. Si ninguno de los valores  ​​es verdadero, ejecute el último bloque de órdenes ";
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = "hacer";
Blockly.Msg.CONTROLS_REPEAT_TITLE = "repetir %1 tiempo";
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = "Ejecutar sentencias varias veces";
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repetir arriba";
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repetir siempre que";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "Mientras un valor sea falso, ejecute las instrucciones";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "Siempre que un valor sea verdadero, ejecute las instrucciones";
Blockly.Msg.DELETE_ALL_BLOCKS = "¿Eliminar estos %1 bloques?";
Blockly.Msg.DELETE_BLOCK = "Eliminar bloque";
Blockly.Msg.DELETE_VARIABLE = "Eliminar variable %1";
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = "¿Eliminar %1 usos de la variable%2?";
Blockly.Msg.DELETE_X_BLOCKS = "Eliminar%1 bloques";
Blockly.Msg.DISABLE_BLOCK = "Deshabilitar bloque";
Blockly.Msg.DUPLICATE_BLOCK = "Duplicar";
Blockly.Msg.ENABLE_BLOCK = "Activar Bloque";
Blockly.Msg.EXPAND_ALL = "Maximizar bloques";
Blockly.Msg.EXPAND_BLOCK = "Maximizar bloque";
Blockly.Msg.EXTERNAL_INPUTS = "Entradas externasExternal Inputs";
Blockly.Msg.HELP = "Ayuda";
Blockly.Msg.INLINE_INPUTS = "Entradas en Línea";
Blockly.Msg.LISTS_CREATE1 = "crear una lista";
Blockly.Msg.LISTS_CREATE2 = "con";
Blockly.Msg.LISTS_CREATE_TOOLTIP = "Crear una lista con el número deseado de elementos";
Blockly.Msg.LISTS_append = 'agregar %1 al final de %2';
Blockly.Msg.LISTS_append_TOOLTIP = 'agregar un elemento al final de la lista';
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "lista";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Agregar, Eliminar, o Reordenar";
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = "crear una lista con";
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Agregar un elemento";
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = "devuelve una cadena o lista con cualquier número de elementos";
Blockly.Msg.LISTS_GET = "el elemento";
Blockly.Msg.LISTS_GET_INDEX_FROM_END = "# desde el final";
Blockly.Msg.LISTS_GET_INDEX_FROM_START = "#"; // untranslated
Blockly.Msg.LISTS_GET_INDEX_GET = "Obtener";
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = "obtener y eliminar";
Blockly.Msg.LISTS_GET_INDEX_LAST = "útimo";
Blockly.Msg.LISTS_GET_INDEX_RANDOM = "aleatorio";
Blockly.Msg.LISTS_GET_INDEX_REMOVE = "eliminar";
Blockly.Msg.LISTS_GET_INDEX_TAIL = ""; // untranslated
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "devuelve el primer elemento de una lista";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM = "devuelve el elemento a la posición especificada en una lista";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "devolver el último elemento de una lista";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "devuelve un elemento aleatorio en una lista";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "Elimina y devuelve el primer elemento de una lista";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = "Elimina y devuelve el elemento en la posición especificada en una lista";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "Elimina y devuelve el último elemento de una lista";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "Elimina y devuelve un elemento aleatorio en una lista";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Elimina el primer elemento de una lista";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = "Elimina el elemento en la posición especificada en una lista";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Elimina el último elemento de una lista";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Elimina un elemento aleatorio de una lista";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = "hasta # desde el final";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = "subir a #";
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = "hasta el final";
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = "obtener la sublista desde el principio";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = "obtener la sublista de # desde el final";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = "obtener la sublista de #";
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = ""; // untranslated
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = "Crea una copia de la parte especificada de una lista";
Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP = "%1 es el último elemento";
Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP = "%1 es el primer elemento";
Blockly.Msg.LISTS_INDEX_OF_FIRST = "encuentra la primera instancia del elemento";
Blockly.Msg.LISTS_INDEX_OF_LAST = "encuentra la última instancia del elemento";
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = "devuelve el índice de la primera / última aparición del elemento en la lista, devuelve%1 si no se encuentra el elemento";
Blockly.Msg.LISTS_INLIST = "en la lista";
Blockly.Msg.LISTS_ISEMPTY_TITLE = "%1 está vacío";
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = "devuelve verdadero si la lista está vacía";
Blockly.Msg.LISTS_LENGTH_TITLE = "longitud de%1";
Blockly.Msg.LISTS_LENGTH_TOOLTIP = "devuelve la longitud de una lista";
Blockly.Msg.LISTS_REPEAT_TITLE = "crear una lista con el elemento%1 repetido%2 veces";
Blockly.Msg.LISTS_REPEAT_TOOLTIP = "Crear una lista que consiste en el valor proporcionado repetido el número especificado de veces";
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = "igual";
Blockly.Msg.LISTS_of = "de";
Blockly.Msg.LISTS_SET_INDEX_SET = "poner el elemento";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "Inserta el elemento al comienzo de una lista";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = "Inserta el elemento en la posición especificada en una lista";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "Agregar elemento al final de una lista";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "Inserta el elemento al azar en una lista";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Fijar el primer elemento de una lista";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM = "Actualizar el elemento a la posición especificada en una lista";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Fijar el último elemento en una lista";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Fijar un elemento aleatorio en una lista";
Blockly.Msg.LOGIC_BOOLEAN_FALSE = "falso";
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = "devuelve un estado lógico 0 o 1";
Blockly.Msg.LOGIC_BOOLEAN_TRUE = "verdadero";
Blockly.Msg.compare = "devuelve verdadero si un valor está en un intervalo";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = "devuelve verdadero si ambas entradas son iguales";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = "devuelve verdadero si la primera entrada es mayor que la segunda";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = "devuelve verdadero si la primera entrada es mayor o igual que la segunda";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = "devuelve verdadero si la primera entrada es más pequeña que la segunda";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = "devuelve verdadero si la primera entrada es más pequeña o igual a la segunda";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = "devuelve verdadero si las dos entradas son diferentes";
Blockly.Msg.LOGIC_NEGATE_TITLE = "no %1";
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = "devuelve verdadero si la entrada es falsa, devuelve falso si la entrada es verdadera";
Blockly.Msg.LOGIC_NULL = "null";
Blockly.Msg.LOGIC_NULL_TOOLTIP = "devuelve null";
Blockly.Msg.LOGIC_OPERATOR = [["y", "and"], ["o", "or"], ["o exclusivo", "xor"], ["cambio a la izquierda", "shiftL"], ["cambio a la izquierda", "shiftR"]];
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = "devuelve verdadero si ambas entradas son verdaderas";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = "devuelve verdadero si al menos una de las entradas es verdadera";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_xor = "devuelve verdadero si solo una de las entradas es verdadera";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_shiftR = "cambio a la dereche \ n";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_shiftL = "hace un cambio a la izquierda";
Blockly.Msg.LOGIC_TERNARY_CONDITION = "prueba";
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = "si es falso";
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = "si es verdadero";
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = "Verifique la condición en 'prueba' Si es verdadero, devuelva el valor 'si es verdadero', de lo contrario devuelva el valor 'si es falso'";
Blockly.Msg.MATH_ADDITION_SYMBOL = "+"; // untranslated
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = "devuelve la suma de los dos números";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "devuelve el cociente de los dos números";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = "devuelve la diferencia de los dos números";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "devuelve el producto de los dos números";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = "devuelve el primer número elevado a la potencia del segundo";
Blockly.Msg.MATH_CHANGE_TITLE = "incremento variable %1 de %2";
Blockly.Msg.MATH_CHANGE_TOOLTIP = "Agregar un número a la variable %1";
Blockly.Msg.MATH_CONSTANT_TOOLTIP = "devuelve una de las constantes actuales: π (3.141 ...), e (2.718 ...), φ (1.618 ...), sqrt (2) (1.414 ...), sqrt (½) (0.707 ...), or ∞ (infinito) ";
Blockly.Msg.MATH_CONSTRAIN_TITLE = "forzar %1 entre %2 y %3";
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = "Restringir un número entre los límites especificados (incluidos)";
Blockly.Msg.MATH_DIVISION_SYMBOL = "÷"; // untranslated
Blockly.Msg.MATH_IS_DIVISIBLE_BY = "es divisible por";
Blockly.Msg.MATH_IS_EVEN = "es par";
Blockly.Msg.MATH_IS_NEGATIVE = "es negativo";
Blockly.Msg.MATH_IS_ODD = "es impar";
Blockly.Msg.MATH_IS_POSITIVE = "es positivo";
Blockly.Msg.MATH_IS_PRIME = "es primo";
Blockly.Msg.MATH_IS_TOOLTIP = "devuelve verdadero o falso si un número es par, impar, primo, entero, positivo, negativo o si es divisible por un número";
Blockly.Msg.MATH_IS_WHOLE = "es entero";
Blockly.Msg.MATH_MODULO_TITLE = "resto %1 ÷%2";
Blockly.Msg.MATH_MODULO_TOOLTIP = "devuelve el resto de la división euclidiana de los dos números";
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = "×"; // untranslated
Blockly.Msg.MATH_NUMBER_TOOLTIP = "Un número";
Blockly.Msg.MATH_ONLIST_HELPURL = ""; // untranslated
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = "promedio de la lista";
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = "máximo de la lista";
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = "media de la lista";
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = "mínimo de la lista";
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = "mayoría de la lista";
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = "elemento aleatorio de la lista";
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = "desviación estándar de la lista";
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = "suma de la lista";
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = "Devuelve los valores numéricos promedio (aritméticos) ​​en la lista";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = "devuelve el número más grande en la lista";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = "devuelve el número medio de la lista";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = "devuelve el número más pequeño de la lista";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = "devuelve una lista de los elementos más comunes en la lista";
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = "devuelve un elemento en la lista aleatoria";
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = "devuelve la desviación estándar de la lista";
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = "devuelve la suma de todos los números en la lista";
Blockly.Msg.MATH_POWER_SYMBOL = "^"; // untranslated
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = "fracción aleatoria";
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = "devuelve una fracción aleatoria entre 0.0 (inclusive) y 1.0 (excluido)";
Blockly.Msg.MATH_RANDOM_INT_TITLE = "entero aleatorio%1 & %2";
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = "devuelve un entero aleatorio entre los dos límites incluidos especificados";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = "redondear";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = "redondeo inferior";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = "redondeo superior";
Blockly.Msg.MATH_ROUND_TOOLTIP = "Redondea un número arriba o abajo";
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = "valor absoluto";
Blockly.Msg.MATH_SINGLE_OP_ROOT = "raíz cuadrada";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = "devuelve el valor absoluto de un número";
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = "devuelve e a la potencia de un número";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = "devuelve el logaritmo natural de un número";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = "devuelve el logaritmo de base 10 de un número";
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = "devuelve el opuesto de un número";
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = "devuelve 10 a la potencia de un número";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = "devuelve la raíz cuadrada de un número";
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = "-"; // untranslated
Blockly.Msg.MATH_TRIG_ACOS = "acos"; // untranslated
Blockly.Msg.MATH_TRIG_ASIN = "asin"; // untranslated
Blockly.Msg.MATH_TRIG_ATAN = "atan"; // untranslated
Blockly.Msg.MATH_TRIG_COS = "cos"; // untranslated
Blockly.Msg.MATH_TRIG_SIN = "sin"; // untranslated
Blockly.Msg.MATH_TRIG_TAN = "tan"; // untranslated
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = "devuelve el arcocoseno de un número";
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = "devuelve el arcoseno de un número";
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = "devuelve el arcotangente de un número";
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = "devuelve el coseno de un ángulo en grados";
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = "devuelve el seno de un ángulo en grados";
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = "devuelve la tangente de un ángulo en grados";
Blockly.Msg.NEW_VARIABLE = "Crear una variable";
Blockly.Msg.NEW_VARIABLE_TITLE = "Nuevo nombre de la variable";
Blockly.Msg.ORDINAL_NUMBER_SUFFIX = ""; // untranslated
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = "Ejecutar la función%1 definida por el usuario";
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = "Ejecuta la función%1 definida por el usuario y usa su resultado";
Blockly.Msg.PROCEDURES_CREATE_DO = "Crear %1";
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = "Describe esta función";
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = "";
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = "hacer";
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = "";
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = "Crear un procedimiento o función sin devolución de datos";
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = "volver";
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = "Crear un procedimiento o función con un retorno de datos";
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = "Advertencia: esta función tiene configuraciones duplicadas";
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = "Resalta la definición de la función";
Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = "devuelve el valor especificado";
Blockly.Msg.PROCEDURES_IFRETURN_WARNING = "Advertencia: este bloque debe usarse en una definición de procedimiento o función";
Blockly.Msg.PROCEDURES_MUTATORARG_TYPE = "de tipo";
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP = "Agregar una entrada al procedimiento o función";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = "argumentos de entrada";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Agregar, eliminar o reorganizar";
Blockly.Msg.REDO = "Rehacer";
Blockly.Msg.REMOVE_COMMENT = "Eliminar un comentario";
Blockly.Msg.RENAME_VARIABLE = "Cambiar el nombre de la variable '%1'";
Blockly.Msg.RENAME_VARIABLE_TITLE = "Renombrar variables '%1'";
//Array
Blockly.Msg.ARRAY_CREATE_EMPTY_TITLE = 'empty!';
Blockly.Msg.tab_create = "Crear bloque 'elemento de la cadena %1'";
Blockly.Msg.tab_create_fix = "Crear bloque 'pone un elemento de la cadena%1 a '";
Blockly.Msg.ARRAY_CREATE_WITH = "compuesto de";
Blockly.Msg.ARRAY_taille = "tamaño";
Blockly.Msg.ARRAY_contenu = "que contiene";
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD = "lista o cadena";
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TOOLTIP = "Agregar, Eliminar o Reordenar";
Blockly.Msg.ARRAY_CREATE_WITH_INPUT_WITH = "elementos";
Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TITLE = "elemento";
Blockly.Msg.ARRAY_CREATE_WITH_TOOLTIP = "Devuelve una lista con varios elementos";
Blockly.Msg.ARRAY_GETINDEX_ITEM = "el elemento de la cadena";
Blockly.Msg.ARRAY_GETINDEX_ITEM2 = "cadena";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP1 = "devuelve el valor almacenado en la lista";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP2 = "crear una matriz del tipo seleccionado";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP3 = "fijar un elemento de la lista o cadena al valor indicado";
Blockly.Msg.ARRAY_create = "seleccionar cadena";
Blockly.Msg.ARRAY_fixe = "poner el elemento de la cadena";
Blockly.Msg.ARRAY_dim = "tamaño de";
Blockly.Msg.ARRAY_index = "índice";
Blockly.Msg.ARRAY_append_tooltip = "agregar un elemento al final de la lista o cadena";
Blockly.Msg.ARRAY_append_url = "";
Blockly.Msg.size = "tamaño de cadena";
Blockly.Msg.size_TOOLTIP = "devuelve el tamaño de la lista o cadena";
//text
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Agregar un elemento";
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = "texto";
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = "Agregar, Eliminar o Reordenar";
Blockly.Msg.TEXT_ISEMPTY_TITLE = "%1 está vacío";
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = "devuelve verdadero si el texto proporcionado está vacío";
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = "texto creado con";
Blockly.Msg.TEXT_JOIN_TOOLTIP = "devuelve un texto que agrega cualquier número de elementos";
Blockly.Msg.TEXT_LENGTH_TITLE = "longitud de %1";
Blockly.Msg.TEXT_LENGTH_TOOLTIP = "devuelve el número de letras (incluidos los espacios) del texto introducido";
Blockly.Msg.TEXT_PRINT_TITLE = "mostrar %1";
Blockly.Msg.TEXT_PRINT_TOOLTIP = "Mostrar texto, número u otro valor especificado";
Blockly.Msg.TEXT_TEXT_TOOLTIP = "Una letra, una palabra o una frase";
Blockly.Msg.TODAY = "hoy";
Blockly.Msg.UNDO = "Cancelar";
Blockly.Msg.VARIABLES_AS = "tipo";
Blockly.Msg.VARIABLES_DEFAULT_NAME = "var";
Blockly.Msg.VARIABLES_GET_CREATE_SET = "Crear bloque 'establece variable %1 en '";
Blockly.Msg.VARIABLES_GET_TOOLTIP = "devuelve el valor de esta variable";
Blockly.Msg.VARIABLES_SET = "poner la variable";
Blockly.Msg.VARIABLES_SET_CREATE_GET = "Crear bloque %1";
Blockly.Msg.VARIABLES_SET_TOOLTIP = "Establecer la variable al valor especificado";
Blockly.Msg.var_set_init = "establecer variable";
Blockly.Msg.var_set_init_tooltip = "Declarar e inicializar la variable del tipo y valor especificado";
Blockly.Msg.ARDUINO_VAR_CONST = "establecer constante";
Blockly.Msg.ARDUINO_VAR_CONST_tooltip = "Declara una constante del tipo y valor especificado";
Blockly.Msg.VARIABLE_ALREADY_EXISTS = "a existe una variable llamada %1";
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = "";
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.CONTROLS_IF_MSG_THEN = "entonces";
Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT = Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT;
