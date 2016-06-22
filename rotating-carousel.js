$(document).ready(function(){
  var carousel = $('#carousel');
  var i = 1;
  var rotateMultiplier = 0;
  var rotateFactor = 0;
  setInterval(function(){
    if(i<7){
    switch (i) {
      case 1:
      i++;
      rotateFactor = rotateFactor-60;
        $('#carousel .first').css('transform', 'rotateY('+(rotateFactor)+'deg )')
        break;

        case 2:
        i++;
        rotateFactor = rotateFactor-60;
        carousel.css('transform', 'rotateY('+(rotateFactor)+'deg )')
          break;

          case 3:
          i++;
          rotateFactor = rotateFactor-60;
          carousel.css('transform', 'rotateY('+(rotateFactor)+'deg )')
            break;

            case 4:
            i++;
            rotateFactor = rotateFactor-60;
            carousel.css('transform', 'rotateY('+(rotateFactor)+'deg )')
              break;

              case 5:
              i++;
              rotateFactor = rotateFactor-60;
              carousel.css('transform', 'rotateY('+(rotateFactor)+'deg )')
                break;

                case 6:
                i = 1;
                rotateFactor = rotateFactor-60;
                carousel.css('transform', 'rotateY('+(rotateFactor)+'deg )')
                  break;

      default:


    }
  }

}, 1000);

});
