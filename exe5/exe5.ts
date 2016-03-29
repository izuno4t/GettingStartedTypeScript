var array: number[] = [1, null, 3]
var sum = 0;
for ( var i = 0; i < array.length; i++ ){
        if ( array[i] != null )
                sum += array[i];
}
alert(sum);
