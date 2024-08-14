export const generateShadowStyle = (
    shadowColor: string,
    shadowOffset: { width: number; height: number },
    shadowOpacity: number,
    shadowRadius: number,
    elevation: number
  ): {
    shadowColor: any,
    shadowOffset: any,
    shadowOpacity: any,
    shadowRadius: any,
    elevation: any,
  }  => {
    return {
      shadowColor,
      shadowOffset,
      shadowOpacity,
      shadowRadius,
      elevation,
    };
  }
  
  